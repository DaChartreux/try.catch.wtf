import React, { ReactNode } from "react";

import BlogHeading from "@components/BlogHeading";
import Heading from "@components/Heading";
import Blockquote from "@components/Blockquote";
import Highlight from "@components/Highlight";
import OrderedList from "@components/Lists";
import Paragraph from "@components/Paragraph";
import Spacer from "@components/Spacer";

type MDXComponentsType = {
  [key: string]: (props: any) => ReactNode;
};

const MDXComponents: MDXComponentsType = {
  Spacer,
  BlogHeading,
  Heading,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  blockquote: (props: any) => <Blockquote {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  pre: ({ children }: any) => <Highlight {...children.props} />,
};

export default MDXComponents;
