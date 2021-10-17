import React, { ReactNode } from "react";
import Image from "next/image";

import SectionHeading from "@components/SectionHeading";
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
  Heading,
  Image,
  SectionHeading,
  h1: ({ children }: any) => (
    <SectionHeading as="h1" fontWeight={500}>
      {children}
    </SectionHeading>
  ),
  h2: ({ children }: any) => (
    <SectionHeading as="h2" fontWeight={600}>
      {children}
    </SectionHeading>
  ),
  h3: ({ children }: any) => (
    <Heading
      fgColor="primary-200"
      fontSize="1.375rem"
      fontWeight={500}
      whileHover="hover"
      initial={["hidden", "rest"]}
    >
      {children}
    </Heading>
  ),
  Spacer,
  Blockquote,
  blockquote: ({ children }) => <Blockquote type="info">{children}</Blockquote>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  ol: (props: any) => <OrderedList {...props} />,
  pre: ({ children }: any) => {
    return <Highlight {...children.props} />;
  },
};

export default MDXComponents;
