import React, { ReactNode } from "react";
import type { ReactElement } from "react";
import type { NextPage } from "next";

import Navbar from "@components/Navbar";
import Layout from "@components/Layout";
import Categories from "@components/Categories";
import RecentPosts from "@components/Recent";
import styled from "styled-components";

type NextPageWithLayout = NextPage<never> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const LayoutWrapper = styled(Layout)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "recent categories"
    "recent test";
  gap: 3rem;
`;

const CategoriesWrapper = styled.div`
  grid-area: categories;
`;

const RecentPostsWrapper = styled.div`
  grid-area: recent;
`;

const Index: NextPageWithLayout = () => {
  return (
    <>
      <CategoriesWrapper>
        <Categories
          categories={[
            { id: 1, category: "ReactJS", slug: "test", color: "blue.300" },
            { id: 2, category: "FFMPEG", slug: "test", color: "yellow.400" },
            { id: 3, category: "TypeScript", slug: "test", color: "green.700" },
            { id: 4, category: "Test", slug: "test", color: "pink.600" },
            { id: 5, category: "Test", slug: "test", color: "blue.700" },
            { id: 6, category: "Test", slug: "test", color: "green.300" },
          ]}
        />
      </CategoriesWrapper>

      <RecentPostsWrapper>
        <RecentPosts
          posts={[
            {
              id: 1,
              categories: [],
              hero: "72Mf6a3tpno",
              title: "An Interactive Guide to Keyframe Animations",
              slug: "test1",
              description:
                "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
            },
            {
              id: 2,
              categories: [],
              hero: "Dcu09vM9H-U",
              title: "An Interactive Guide to Keyframe Animations",
              slug: "test2",
              description:
                "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
            },
          ]}
        />
      </RecentPostsWrapper>
    </>
  );
};

Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>{page}</LayoutWrapper>
    </>
  );
};

export default Index;
