import React from "react";
import styled from "@emotion/styled";

import Heading from "@components/Heading";
import PostPreview from "@components/PostPreview";
import { HeroImageName } from "@typings/heroImageName";

type RecentPostsProps = {
  posts: {
    id: number;
    title: string;
    description: string;
    categories: string[];
    slug: string;
    hero: HeroImageName;
  }[];
};

const PostsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 1536px) {
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const RecentPosts = ({ posts }: RecentPostsProps) => (
  <>
    <Heading
      fgColor="primary-100"
      fontWeight={500}
      fontSize="1rem"
      margin="0 0 1.75rem 0"
    >
      RECENT
    </Heading>

    <PostsGrid>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          categories={post.categories}
          hero={post.hero}
        />
      ))}
    </PostsGrid>
  </>
);

export default RecentPosts;
