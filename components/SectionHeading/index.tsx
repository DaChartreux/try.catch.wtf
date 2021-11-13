import React, { useState } from "react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import HashIcon from "@components/icons/HashIcon";
import { useInView } from "@hooks/useInView";

import style from "./SectionHeading.module.css";

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
    <motion.a
      className={style.blogAnchorHeading}
      initial="rest"
      animate="rest"
      ref={containerRef}
      id={children.toLowerCase().replace(/ /g, "-")}
      href={`#${children.toLowerCase().replace(/ /g, "-")}`}
    >
      <motion.div
        className={style.anchorIcon}
        variants={slashMotion}
        animate={isHovering ? "hover" : "rest"}
      >
        <HashIcon />
      </motion.div>
      <Heading
        fgColor="primary-100"
        fontSize={fontSize}
        fontWeight={fontWeight}
        margin="2rem 0 1rem 0"
      >
        {children}
      </Heading>
    </motion.a>
  );
};

BlogHeading.defaultProps = {
  fontWeight: 600,
  fontSize: "2rem",
};

export default BlogHeading;
