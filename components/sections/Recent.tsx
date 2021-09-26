import React from "react";

import Heading from "@components/Heading";
import PostPreview from "@components/PostPreview";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";

type RecentPostsProps = {
  posts: {
    id: number;
    title: string;
    description: string;
    categories: string[];
    slug: string;
  }[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <Heading
      fgColor={useAppThemeValue<ColorShade>("pink.600", "pink.500")}
      fgHoverColor={useAppThemeValue<ColorShade>("pink.600", "pink.500")}
      fontWeight={500}
      fontSize={"1.2rem"}
    >
      RECENT
    </Heading>
    {posts.map((post) => (
      <PostPreview
        key={post.id}
        slug={post.slug}
        title={post.title}
        description={post.description}
        categories={post.categories}
      />
    ))}
  </>
);

export default RecentPosts;
