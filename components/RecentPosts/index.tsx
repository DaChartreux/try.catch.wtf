import React from "react";

import Heading from "@components/Heading";
import PostPreview from "@components/PostPreview";

import type { Post } from "@typings/data";

import style from "./RecentPosts.module.css";

type RecentPostsProps = {
  posts: Post[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <Heading
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={520}
      margin="0 0 1rem 0"
    >
      RECENT
    </Heading>

    <div className={style.grid}>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          updatedAt={post.updatedAt}
        />
      ))}
    </div>
  </>
);

export default RecentPosts;
