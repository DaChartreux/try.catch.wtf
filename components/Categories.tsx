import React from "react";
import { motion } from "framer-motion";

import HeadingPStyle from "@components/Heading";
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
  <>
    <HeadingPStyle
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={600}
      margin="0 0 1rem 0"
    >
      CATEGORIES
    </HeadingPStyle>
    <motion.div
      variants={{
        visible: {
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
    </motion.div>
  </>
);

export default Categories;
