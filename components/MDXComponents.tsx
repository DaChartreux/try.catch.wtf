import React, { ReactNode } from "react";
import Image from "next/image";

import SectionHeading from "@components/SectionHeading";
import Heading from "@components/Heading";
import Blockquote from "@components/Blockquote";
import Highlight from "@components/Highlight";
import OrderedList from "@components/Lists";
import Paragraph from "@components/Paragraph";
import Spacer from "@components/Spacer";
import ImageSection from "@components/ImageSection";

type MDXComponentsType = {
  [key: string]: (props: any) => ReactNode;
};

const MDXComponents: MDXComponentsType = {
  Heading,
  Image,
  Spacer,
  ImageSection,
  SectionHeading,
  h1: ({ children }: any) => (
    <SectionHeading fontWeight={500} fontSize="2rem">
      {children}
    </SectionHeading>
  ),
  h2: ({ children }: any) => (
    <SectionHeading fontWeight={500} fontSize="1.75rem">
      {children}
    </SectionHeading>
  ),
  h3: ({ children }: any) => (
    <Heading
      fgColor="primary-100"
      fontWeight={600}
      fontSize="1.5rem"
      margin="1rem 0"
    >
      {children}
    </Heading>
  ),
  blockquote: ({ children }) => <Blockquote type="info">{children}</Blockquote>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  ol: (props: any) => <OrderedList {...props} />,
  ul: (props: any) => <OrderedList {...props} />,
  pre: ({ children }: any) => <Highlight {...children.props} />,
};

export default MDXComponents;
