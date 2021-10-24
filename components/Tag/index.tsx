import React, { ReactNode } from "react";
import { m } from "framer-motion";

import { TagStyle } from "@components/Tag/Tag.style";
import type { TagStyledProps } from "@components/Tag/Tag.style";

type TagProps = {
  href: string;
  children: ReactNode;
};

const Tag = ({ children, ...props }: TagProps & TagStyledProps) => (
  <TagStyle
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    }}
    {...props}
  >
    <m.div
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 1.03,
      }}
    />
    {children}
  </TagStyle>
);

export default Tag;
