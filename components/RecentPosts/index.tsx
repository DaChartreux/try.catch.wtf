import React from "react";

import HeadingPStyle from "@components/Heading";
import PostPreview from "@components/PostPreview";
import { HeroImageName } from "@typings/heroImageName";
import { PostsGridStyle } from "@components/RecentPosts/RecentPosts.style";

type RecentPostsProps = {
  posts: {
    id: number;
    title: string;
    description: string;
    categories: string[];
    slug: string;
    heroImageName: HeroImageName;
    createdAt: string;
  }[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <HeadingPStyle
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={600}
      margin="0 0 1rem 0"
    >
      RECENT
    </HeadingPStyle>

    <PostsGridStyle>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          categories={post.categories}
          hero={post.heroImageName}
          createdAt={post.createdAt}
        />
      ))}
    </PostsGridStyle>
  </>
);

export default RecentPosts;
