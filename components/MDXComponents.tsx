import React from "react";
import { MDXProviderComponentsProp } from "@mdx-js/react";

import BlogHeading from "@components/BlogHeading";
import Heading from "@components/Heading";
import Blockquote from "@components/Blockquote";
import Highlight from "@components/Highlight";
import OrderedList from "@components/Lists";
import Paragraph from "@components/Paragraph";

const MDXComponents: MDXProviderComponentsProp = {
  h1: (props: any) => (
    <Heading {...props} fontSize="5rem" fontWeight={400} fgColor="pink.400" />
  ),
  h3: (props: any) => <BlogHeading {...props} />,
  h2: (props: any) => <BlogHeading {...props} />,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  blockquote: (props: any) => <Blockquote {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  pre: ({ children }: any) => <Highlight {...children.props} />,
};

export default MDXComponents;
