import React from "react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import Tag from "@components/Tag";
import { ColorShade } from "@typings/emotion";

type CategoriesProps = {
  categories: {
    id: number;
    category: string;
    slug: string;
    color: ColorShade;
  }[];
};

const Categories = ({ categories }: CategoriesProps) => (
  <>
    <Heading
      fgColor="pink.500"
      fontWeight={500}
      fontSize="1rem"
      margin="0 0 1.75rem 0"
    >
      CATEGORIES
    </Heading>
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
