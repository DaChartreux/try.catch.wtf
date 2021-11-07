import React, { useState } from "react";

import Heading from "@components/Heading";
import { useInView } from "@hooks/useInView";
import {
  BlogAnchorHeadingStyle,
  BlogAnchorIconStyle,
} from "@components/SectionHeading/SectionHeading.style";
import HashIcon from "@components/icons/HashIcon";

type BlogHeadingProps = {
  children: string;
  fontWeight: number;
  fontSize: string;
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const BlogHeading = ({ fontWeight, fontSize, children }: BlogHeadingProps) => {
  const { containerRef } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [isHovering] = useState(false);

  return (
    <BlogAnchorHeadingStyle
      initial="rest"
      animate="rest"
      ref={containerRef}
      id={children.toLowerCase().replace(/ /g, "-")}
      href={`#${children.toLowerCase().replace(/ /g, "-")}`}
    >
      <BlogAnchorIconStyle
        variants={slashMotion}
        animate={isHovering ? "hover" : "rest"}
      >
        <HashIcon />
      </BlogAnchorIconStyle>
      <Heading
        fgColor="primary-100"
        fontSize={fontSize}
        fontWeight={fontWeight}
        margin="2rem 0 1rem 0"
      >
        {children}
      </Heading>
    </BlogAnchorHeadingStyle>
  );
};

BlogHeading.defaultProps = {
  fontWeight: 600,
  fontSize: "2rem",
};

export default BlogHeading;
