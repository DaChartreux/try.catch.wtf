import React from "react";

import HeadingStyle from "@components/Heading";
import PostPreview from "@components/PostPreview";
import { PostsGridStyle } from "@components/RecentPosts/RecentPosts.style";

import type { Post } from "@typings/data";

type RecentPostsProps = {
  posts: Post[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <HeadingStyle
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={600}
      margin="0 0 1rem 0"
    >
      RECENT
    </HeadingStyle>

    <PostsGridStyle>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          categories={post.categories}
          heroImageName={post.heroImageName}
          createdAt={post.createdAt}
        />
      ))}
    </PostsGridStyle>
  </>
);

export default RecentPosts;
