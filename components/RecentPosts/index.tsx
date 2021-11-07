import React from "react";

import Heading from "@components/Heading";
import PostPreview from "@components/PostPreview";
import { PostsGridStyle } from "@components/RecentPosts/RecentPosts.style";

import type { Post } from "@typings/data";

type RecentPostsProps = {
  posts: Post[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <Heading
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={600}
      margin="0 0 1rem 0"
    >
      RECENT
    </Heading>

    <PostsGridStyle>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          updatedAt={post.updatedAt}
        />
      ))}
    </PostsGridStyle>
  </>
);

export default RecentPosts;
