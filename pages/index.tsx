import fs from "fs";
import path from "path";

import React from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import dayjs, { Dayjs } from "dayjs";
import matter from "gray-matter";

import { postFilePaths, POSTS_PATH } from "@utils/mdxUtils";
import { updatePosts } from "@utils/db";

import type { NextPageWithLayout } from "@typings/app";
import type { Post } from "@typings/data";

import style from "./index.module.css";

const Categories = dynamic(() => import("@components/Categories"), {
  ssr: true,
});
const RecentPosts = dynamic(() => import("@components/RecentPosts"), {
  ssr: true,
});

type IndexProps = {
  latestPosts: Post[];
};

const Index: NextPageWithLayout<IndexProps> = ({ latestPosts }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Try... Catch</title>
      </Head>
      <div className={style.categories}>
        <Categories categories={["web", "performance", "frontend"]} />
      </div>

      <div className={style.recentPosts}>
        <RecentPosts posts={latestPosts} />
      </div>
    </>
  );
};

Index.getLayout = (page: ReactElement) => (
  <main className={style.layout}>{page}</main>
);

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
      updatedAt: dayjs(data.updatedAt).subtract(offset, "minute"),
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
    .sort((a, b) => (a.updatedAt as Dayjs).diff(b.updatedAt as Dayjs))
    .slice(0, 4)
    .map((data) => ({
      ...data,
      updatedAt: (data.updatedAt as Dayjs).format("DD MMM"),
    }))
    .reverse();

  return {
    props: {
      latestPosts,
    },
  };
};

export default Index;
