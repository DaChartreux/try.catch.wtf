import React, { useState } from "react";

import HeadingStyle from "@components/Heading";
import { useInView } from "@hooks/useInView";
import {
  BlogAnchorHeadingStyle,
  BlogAnchorIconStyle,
} from "@components/SectionHeading/SectionHeading.style";
import HashIcon from "@components/icons/HashIcon";

type BlogHeadingProps = {
  children: string;
  fontWeight?: number;
  fontSize?: string;
};

const textMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
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
  const { containerRef, isVisible } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [isHovering, setIsHovering] = useState(false);

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
      <HeadingStyle
        fgColor="primary-100"
        fontSize={fontSize!}
        fontWeight={fontWeight}
        whileHover="hover"
        initial={["hidden", "rest"]}
        animate={isVisible && "visible"}
        variants={textMotion}
        transition={{ duration: 0.4 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {children}
      </HeadingStyle>
    </BlogAnchorHeadingStyle>
  );
};

BlogHeading.defaultProps = {
  fontWeight: 600,
  fontSize: "2rem",
};

export default BlogHeading;
