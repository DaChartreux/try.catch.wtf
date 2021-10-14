import React, { ReactNode } from "react";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Categories from "@components/Categories";
import RecentPosts from "@components/Recent";
import Footer from "@components/Footer";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });

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

  @media (max-width: 1536px) {
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "recent categories"
      "recent test";
    gap: 3rem;
  }

  @media (max-width: 1280px) {
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "recent categories"
      "recent test";
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "recent categories"
      "recent test";
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "recent"
      "recent"
      "categories";
    gap: 3rem;
  }

  @media (max-width: 640px) {
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "recent"
      "recent"
      "categories";
    gap: 3rem;
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
      <body>
        {/* <CategoriesWrapper>
        <Categories
          categories={[
            { id: 1, category: "ReactJS", slug: "test", color: "blue.100" },
            { id: 2, category: "FFMPEG", slug: "test", color: "yellow.100" },
            { id: 3, category: "TypeScript", slug: "test", color: "green.100" },
            { id: 4, category: "Test", slug: "test", color: "red.100" },
            { id: 5, category: "Test", slug: "test", color: "blue.100" },
            { id: 6, category: "Test", slug: "test", color: "green.100" },
          ]}
        />
      </CategoriesWrapper> */}

        <RecentPostsWrapper>
          <RecentPosts
            posts={[
              {
                id: 1,
                categories: [],
                hero: "72Mf6a3tpno",
                title: "An Interactive Guide to Keyframe Animations",
                slug: "blog-1",
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
      </body>
    </>
  );
};

Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>{page}</LayoutWrapper>
      <Footer />
    </>
  );
};

export default Index;
