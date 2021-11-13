import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import THEME from "@styles/theme";

import type { ColorShade } from "@typings/theme";

import style from "./Tag.module.css";

type TagStyleVars = {
  "--bg-color": string;
};

type TagProps = {
  children: ReactNode;
  bgColor: ColorShade;
  href: string;
};

const Tag = ({ children, bgColor }: TagProps) => {
  const tagStyle: TagStyleVars = {
    "--bg-color": THEME.colors[bgColor],
  };

  return (
    <motion.div
      className={style.tagStyle}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      style={tagStyle as any}
    >
      <div />
      {children}
    </motion.div>
  );
};

export default Tag;
