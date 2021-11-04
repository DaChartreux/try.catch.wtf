import fs from "fs";
import path from "path";

import React from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import dayjs, { Dayjs } from "dayjs";
import styled from "@emotion/styled";
import matter from "gray-matter";

import Layout from "@components/Layout";
import { postFilePaths, POSTS_PATH } from "@utils/mdxUtils";
import { updatePosts } from "@utils/db";

import type { NextPageWithLayout } from "@typings/app";
import type { Post } from "@typings/data";

const Categories = dynamic(() => import("@components/Categories"), {
  ssr: true,
});
const RecentPosts = dynamic(() => import("@components/RecentPosts"), {
  ssr: true,
});

type IndexProps = {
  latestPosts: Post[];
};

const LayoutWrapper = styled(Layout)`
  padding: 0 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "recent categories"
    "recent test";
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 4fr 1fr;
  }

  @media (max-width: 640px) {
    padding: 0 1rem;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "recent"
      "recent"
      "categories";
  }
`;

const CategoriesWrapper = styled.div`
  grid-area: categories;
`;

const RecentPostsWrapper = styled.div`
  grid-area: recent;
`;

const Index: NextPageWithLayout<IndexProps> = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>Try... Catch</title>
      </Head>
      <CategoriesWrapper>
        <Categories categories={["web", "performance", "frontend"]} />
      </CategoriesWrapper>

      <RecentPostsWrapper>
        <RecentPosts posts={latestPosts} />
      </RecentPostsWrapper>
    </>
  );
};

Index.getLayout = (page: ReactElement) => <LayoutWrapper>{page}</LayoutWrapper>;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const offset = new Date().getTimezoneOffset();
  const fileNames = postFilePaths.map((path) => path.replace(/\.mdx?$/, ""));

  const allPosts: Post[] = fileNames.map((slug) => {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { data } = matter(source);

    return {
      ...(data as Pick<
        Post,
        "categories" | "description" | "id" | "slug" | "title" | "isPublished"
      >),
      slug,
      createdAt: dayjs(data.createdAt).subtract(offset, "minute"),
    };
  });

  if (
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV === "production"
  ) {
    await updatePosts(allPosts);
  }

  const latestPosts: any[] = allPosts
    .filter((data: any) => data.isPublished)
    .sort((a, b) => {
      return -(a.createdAt as Dayjs).diff(b.createdAt as Dayjs);
    })
    .slice(0, 4)
    .map((data) => ({
      ...data,
      createdAt: (data.createdAt as Dayjs).format("DD MMM"),
    }))
    .reverse();

  return {
    props: {
      latestPosts,
    },
  };
};

export default Index;
