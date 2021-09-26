import React from "react";

import Heading from "@components/Heading";
import Tag from "@components/Tag";
import { ColorShade } from "@typings/styled";

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
    <Heading fgColor="pink.500" fontWeight={500} fontSize={"1.2rem"}>
      CATEGORIES
    </Heading>
    {categories.map((category) => (
      <Tag
        href={category.slug}
        key={category.id}
        color={category.color}
        fgColor="white"
      >
        {category.category}
      </Tag>
    ))}
  </>
);

export default Categories;
