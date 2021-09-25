import Button from "@components/Button";
import Heading from "@components/Heading";
import Tag from "@components/Tag";
import React from "react";
import styled from "styled-components";

type CategoriesProps = {
  categories: {
    category: string;
    slug: string;
  }[];
};

const ButtonWrapper = styled(Button)`
  margin: 0 0.5rem 0.5rem 0;
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue[200]};
`;

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      <Heading fgColor={"#ff006a"} fontWeight={500} fontSize={"1.5rem"}>
        CATEGORIES
      </Heading>
      {categories.map((category) => (
        <Tag href={category.slug} key={1} color="pink.400" fgColor="white">
          {category.category}
        </Tag>
      ))}
    </>
  );
};

export default Categories;
