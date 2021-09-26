import React, { ReactNode } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import type { ReactElement } from "react";

import Navbar from "@components/Navbar";
import Categories from "@components/sections/Categories";
import RecentPosts from "@components/sections/Recent";

const MainStyled = styled.main`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
`;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Index: NextPageWithLayout = () => {
  return (
    <MainStyled>
      <div style={{ display: "block", width: "400px" }}>
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
        <RecentPosts
          posts={[
            {
              id: 1,
              categories: [],
              title: "An Interactive Guide to Keyframe Animations",
              slug: "An Interactive Guide to Keyframe Animations",
              description:
                "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
            },
            {
              id: 1,
              categories: [],
              title: "An Interactive Guide to Keyframe Animations",
              slug: "An Interactive Guide to Keyframe Animations",
              description:
                "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
            },
            {
              id: 1,
              categories: [],
              title: "An Interactive Guide to Keyframe Animations",
              slug: "An Interactive Guide to Keyframe Animations",
              description:
                "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
            },
          ]}
        />
      </div>
    </MainStyled>
  );
};

Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default Index;
