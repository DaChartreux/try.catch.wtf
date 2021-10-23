import fs from "fs";
import path from "path";

import React from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import matter from "gray-matter";
import dayjs from "dayjs";

import Layout from "@components/Layout";
import { postFilePaths, POSTS_PATH } from "utils/mdxUtils";
import { NextPageWithLayout } from "@typings/app";
import { HeroImageName } from "@typings/heroImageName";
import { updatePosts } from "utils/dbSync";

const Categories = dynamic(() => import("@components/Categories"), {
  ssr: true,
});
const RecentPosts = dynamic(() => import("@components/RecentPosts"), {
  ssr: true,
});

type IndexProps = {
  latestPosts: {
    id: number;
    title: string;
    description: string;
    categories: string[];
    fileName: string;
    slug: string;
    heroImageName: HeroImageName;
    createdAt: string;
    isPublished: boolean;
  }[];
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
        <Categories
          categories={[
            { id: 1, category: "Test 1", slug: "test", color: "blue-100" },
            { id: 2, category: "Test 2", slug: "test", color: "yellow-100" },
            {
              id: 3,
              category: "Test 3",
              slug: "test",
              color: "purple-100",
            },
            { id: 4, category: "Test 4", slug: "test", color: "red-100" },
            { id: 5, category: "Test 5", slug: "test", color: "pink-100" },
            { id: 6, category: "Test 6", slug: "test", color: "indigo-100" },
          ]}
        />
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

  console.log(fileNames);

  const allPosts: any[] = fileNames.map((slug) => {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { data } = matter(source);

    return {
      ...data,
      slug,
      createdAt: dayjs(data.createdAt).subtract(offset, "minute"),
    };
  });

  if (process.env.VERCEL_ENV) {
    await updatePosts(allPosts);
  }

  const latestPosts: any[] = allPosts
    .filter((data: any) => data.isPublished)
    .sort((a, b) => {
      return -a.createdAt.diff(b.createdAt);
    })
    .slice(0, 4)
    .map((data) => ({ ...data, createdAt: data.createdAt.format("DD MMM") }));

  return {
    props: {
      latestPosts,
    },
  };
};

export default Index;
