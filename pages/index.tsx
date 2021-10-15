import React, { ReactNode } from "react";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Categories from "@components/Categories";
import RecentPosts from "@components/Recent";
import Footer from "@components/Footer";

type NextPageWithLayout = NextPage<never> & {
  getLayout?: (page: ReactElement) => ReactNode;
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

  @media (max-width: 768px) {
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

const Index: NextPageWithLayout = () => {
  return (
    <>
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
        <RecentPosts
          posts={[
            {
              id: 1,
              categories: [],
              hero: "72Mf6a3tpno",
              title: "An Interactive Guide to Keyframe Animations",
              slug: "react-state-and-render",
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
      <LayoutWrapper>{page}</LayoutWrapper>
      <Footer />
    </>
  );
};

export default Index;
