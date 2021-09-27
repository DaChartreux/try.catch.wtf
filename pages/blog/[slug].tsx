import fs from "fs";
import path from "path";
import React, { ReactNode } from "react";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import { POSTS_PATH, postFilePaths } from "utils/mdxUtils";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Spacer from "@components/Spacer";
import Heading from "@components/Heading";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import BlogHeading from "@components/BlogHeading";
import { useEffect } from "react";
import router, { useRouter } from "next/dist/client/router";

const components = {
  Head,
  Spacer,
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const LayoutWrapper = styled(Layout)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "recent categories"
    "recent test";
  gap: 64px 96px;
`;

const Blog: NextPageWithLayout = ({ source, frontMatter }: any) => {
  useEffect(() => {
    const url = window.location.hash;
    document.getElementById(url.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div style={{ gridArea: "recent" }}>
        <MDXRemote {...source} components={components} />
      </div>
    </>
  );
};

Blog.getLayout = (page: ReactElement) => {
  return (
    <MDXProvider
      components={{
        h1: (props) => (
          <Heading
            fgColor="white"
            fontWeight={500}
            fontSize={"2.5rem"}
            {...props}
          />
        ),
        h3: (props) => <BlogHeading {...props} />,
        a: (props): any => console.log({ props }),
        h2: (props) => <BlogHeading {...props} />,
        p: (props) => (
          <p
            {...props}
            style={{ color: "white", fontSize: "1.125rem", fontWeight: 500 }}
          />
        ),
      }}
    >
      <Navbar />
      <LayoutWrapper>{page}</LayoutWrapper>
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
      frontMatter: data,
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
