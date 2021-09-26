import fs from "fs";
import path from "path";
import React, { ReactNode } from "react";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import { POSTS_PATH, postFilePaths } from "utils/mdxUtils";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";

const components = {
  Head,
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Blog: NextPageWithLayout = ({ source, frontMatter }: any) => {
  return (
    <>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
};

Blog.getLayout = (page: ReactElement) => (
  <>
    <Navbar />
    <Layout>{page}</Layout>
  </>
);

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
