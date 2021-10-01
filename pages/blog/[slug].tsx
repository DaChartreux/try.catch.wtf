import fs from "fs";
import path from "path";

import React, { ReactNode, ReactElement, useEffect } from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import { POSTS_PATH, postFilePaths } from "utils/mdxUtils";
import Hero from "@components/Hero";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Spacer from "@components/Spacer";
import heroImageMap from "@components/HeroImage";
import MDXComponents from "@components/MDXComponents";
import { HeroImageName } from "@typings/HeroImageName";

const components = {
  Spacer,
};

type NextPageWithLayout = NextPage<BlogPropsType> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type BlogPropsType = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: {
    slug: string;
    heroImageName: HeroImageName;
    heroCreditUserProfile: string;
    heroCreditUserProfileUrl: string;
    heroCreditSource: string;
    title: string;
  };
  children: ReactNode;
};

const LayoutWrapper = styled(Layout)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "hero hero"
    "recent categories"
    "recent categories";
  gap: 3rem;
`;

const Blog: NextPageWithLayout = ({ source, frontMatter }) => {
  useEffect(() => {
    const url = window.location.hash;
    document.getElementById(url.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Spacer height="3rem" width="" />

      <LayoutWrapper>
        <div style={{ gridArea: "hero" }}>
          <Hero
            layoutId={`${frontMatter.slug}__hero`}
            title={frontMatter.title}
            heroSrc={heroImageMap[`${frontMatter.heroImageName}_m`]}
            heroCreditSource={frontMatter.heroCreditSource}
            heroCreditUserProfile={frontMatter.heroCreditUserProfile}
            heroCreditUserProfileUrl={frontMatter.heroCreditUserProfileUrl}
          />
        </div>
        <Spacer height="3rem" width="" />

        <div style={{ gridArea: "recent" }}>
          <MDXRemote {...source} components={components} />
        </div>
      </LayoutWrapper>
    </>
  );
};

Blog.getLayout = (page: ReactElement) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Navbar />
      {page}
    </MDXProvider>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, slug: params.slug },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
