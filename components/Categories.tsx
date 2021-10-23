import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import HeadingStyle from "@components/Heading";
import Tag from "@components/Tag";
import THEME from "@styles/theme";

type CategoriesProps = {
  categories: {
    id: number;
    category: string;
    slug: string;
    color: keyof typeof THEME["colors"];
  }[];
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
      {categories.map((category) => (
        <Tag
          key={category.id}
          href={category.slug}
          bgColor={category.color}
          fgColor="white"
        >
          {category.category}
        </Tag>
      ))}
    </m.div>
  </LazyMotion>
);

export default Categories;
