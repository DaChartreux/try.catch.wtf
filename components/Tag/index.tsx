import React, { ReactNode } from "react";

import { TagStyle } from "@components/Tag/Tag.style";
import THEME from "@styles/theme";

import type { ColorShade } from "@typings/theme";
import type { TagStyleVars } from "@components/Tag/Tag.style";

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
    <TagStyle
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
    </TagStyle>
  );
};

export default Tag;
