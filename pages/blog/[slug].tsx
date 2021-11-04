import fs from "fs";
import path from "path";

import React, { ReactElement, useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import styled from "@emotion/styled";

import Hero from "@components/Hero";
import Layout from "@components/Layout";
import MDXComponents from "@components/MDXComponents";
import HeadingStyle from "@components/Heading";
import ViewsCounter from "@components/ViewsCounter";
import CalendarIcon from "@components/icons/CalendarIcon";
import { POSTS_PATH, postFilePaths } from "@utils/mdxUtils";

import type { NextPageWithLayout } from "@typings/app";
import type { Post, Views } from "@typings/data";
import { getPost } from "@utils/db";

type BlogPropsType = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: Post;
};

const LayoutWrapper = styled(Layout)`
  padding: 0 2rem;
  display: grid;
  grid-template-rows: min-content min-content minmax(0, max-content);
  grid-template-areas:
    "heading"
    "hero"
    "post";
  gap: 3rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

const HeroStyle = styled.div`
  grid-area: hero;
  width: 100%;
`;

const PostStyle = styled.div`
  grid-area: post;
  max-width: 900px;
  margin: auto;
  width: 100%;
`;

const Blog: NextPageWithLayout<BlogPropsType> = ({ source, frontMatter }) => {
  const { id } = frontMatter;

  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch(`/api/updateViews/${id}`)
      .then<Views>((res) => res.json())
      .then((json) => setViews(json.views))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const url = window.location.hash;
    document.getElementById(url.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="image" content={`/api/linkPreview/${frontMatter.slug}`} />
        <meta
          property="og:image"
          content={`/api/linkPreview/${frontMatter.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://try.catch.wtf" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="description"
          content="How to use fonts with minimal side effects on lighthouse score"
        />
        <meta
          property="og:description"
          content="How to use fonts with minimal side effects on lighthouse score"
        />
      </Head>
      <div style={{ gridArea: "heading" }}>
        <HeadingStyle
          fgColor="green-100"
          fontSize="3rem"
          fontWeight={600}
          margin="1rem 0 0.5rem 0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, translateX: -32 },
            visible: {
              opacity: 1,
              translateX: 0,
            },
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {frontMatter.title}
        </HeadingStyle>
        <div>
          <CalendarIcon />
          <p>{frontMatter.createdAt}</p>
        </div>
      </div>
      <HeroStyle>
        <Hero
          layoutId={`${frontMatter.slug}__hero`}
          title={frontMatter.title}
          heroSrc={`/img/${frontMatter.slug}/hero.jpg`}
          heroCreditSource={frontMatter.heroCreditSource!}
          heroCreditUserProfile={frontMatter.heroCreditUserProfile!}
          heroCreditUserProfileUrl={frontMatter.heroCreditUserProfileUrl!}
        />
      </HeroStyle>

      <MDXRemote {...source} components={MDXComponents} />

      <ViewsCounter from={0} to={views} />
    </>
  );
};

Blog.getLayout = (page: ReactElement) => <LayoutWrapper>{page}</LayoutWrapper>;

export const getStaticProps: GetStaticProps<BlogPropsType> = async ({
  params,
}: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  const post = await getPost(params.slug);

  if (post === null) {
    throw new Error("Post not found");
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...(data as Pick<
          Post,
          | "id"
          | "title"
          | "description"
          | "categories"
          | "createdAt"
          | "isPublished"
          | "heroCreditSource"
          | "heroCreditUserProfile"
          | "heroCreditUserProfileUrl"
        >),
        id: post.id,
        slug: params.slug,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
