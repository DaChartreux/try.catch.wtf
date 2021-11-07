import fs from "fs";
import path from "path";

import React, { ReactElement, useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import styled from "@emotion/styled";
import dayjs from "dayjs";

import Hero from "@components/Hero";
import Layout from "@components/Layout";
import MDXComponents from "@components/MDXComponents";
import Heading from "@components/Heading";
import ViewsSection from "@components/ViewsSection";
import Spacer from "@components/Spacer";
import DateSection from "@components/DateSection";
import { getPost } from "@utils/db";
import { POSTS_PATH, postFilePaths } from "@utils/mdxUtils";

import type { NextPageWithLayout } from "@typings/app";
import type { Post, Views } from "@typings/data";

type BlogPropsType = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: Post;
};

const LayoutWrapper = styled(Layout)`
  padding: 0 2rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

const PostWrapper = styled.div`
  max-width: 1000px;
  margin: auto;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

const Blog: NextPageWithLayout<BlogPropsType> = ({
  source,
  frontMatter: {
    id,
    title,
    slug,
    description,
    updatedAt,
    heroCreditSource,
    heroCreditUserProfile,
    heroCreditUserProfileUrl,
  },
}: BlogPropsType) => {
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
        <title>{title}</title>
        <meta name="image" content={`/api/linkPreview/${id}`} />
        <meta property="og:image" content={`/api/linkPreview/${id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://try.catch.wtf" />
        <meta property="og:title" content={title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <Hero
        layoutId={`${slug}__hero`}
        title={title}
        heroSrc={`/img/${slug}/hero.jpg`}
        heroCreditSource={heroCreditSource!}
        heroCreditUserProfile={heroCreditUserProfile!}
        heroCreditUserProfileUrl={heroCreditUserProfileUrl!}
      />
      <Spacer height="2rem" />

      <PostWrapper>
        <Heading
          fgColor="green-100"
          fontSize="2.25rem"
          fontWeight={400}
          margin="1rem 0 0.5rem 0"
        >
          {title}
        </Heading>
        <Spacer height="2rem" />
        <MDXRemote {...source} components={MDXComponents} />
      </PostWrapper>

      <DateSection updatedAt={updatedAt.toString()} />
      <ViewsSection from={0} to={views} />

      <Spacer height="3rem" />
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
        ...(data as Post),
        id: post.id,
        slug: params.slug,
        updatedAt: dayjs(data.updatedAt).format("MMMM D, YYYY"),
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
