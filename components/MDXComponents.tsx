import React from "react";
import BlogHeading from "@components/BlogHeading";
import Heading from "@components/Heading";

const MDXComponents = {
  h1: (props: any) => (
    <Heading {...props} fontSize="5rem" fontWeight={400} fgColor="pink.400" />
  ),
  h3: (props: any) => <BlogHeading {...props} />,
  h2: (props: any) => <BlogHeading {...props} />,
  p: (props: any) => (
    <p
      {...props}
      style={{ color: "white", fontSize: "1.125rem", fontWeight: 500 }}
    />
  ),
};

export default MDXComponents;
