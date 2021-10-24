import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import HeadingStyle from "@components/Heading";
import Tag from "@components/Tag";
import { CATEGORIES } from "@utils/categories";

import type { CategoryString } from "@typings/data";

type CategoriesProps = {
  categories: CategoryString[];
};

const Categories = ({ categories }: CategoriesProps) => (
  <LazyMotion features={domAnimation}>
    <HeadingStyle
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={600}
      margin="0 0 1rem 0"
    >
      CATEGORIES
    </HeadingStyle>
    <m.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.02,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category, i) => (
        <Tag
          key={i}
          href={category}
          bgColor={CATEGORIES[category].color}
          fgColor="white"
        >
          {CATEGORIES[category].category}
        </Tag>
      ))}
    </m.div>
  </LazyMotion>
);

export default Categories;
