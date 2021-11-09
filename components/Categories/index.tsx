import React from "react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import Tag from "@components/Tag";
import { CATEGORIES } from "@utils/categories";

import type { CategoryString } from "@typings/data";

type CategoriesProps = {
  categories: CategoryString[];
};

const Categories = ({ categories }: CategoriesProps) => (
  <>
    <Heading
      fgColor="primary-100"
      fontSize="1.25rem"
      fontWeight={520}
      margin="0 0 1rem 0"
    >
      CATEGORIES
    </Heading>
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <Tag
          key={category}
          href={category}
          bgColor={CATEGORIES[category].color}
        >
          {CATEGORIES[category].category}
        </Tag>
      ))}
    </motion.div>
  </>
);

export default Categories;
