import React, { ReactNode } from "react";

import { HeadingStyle } from "@components/Heading/Heading.style";
import THEME from "@styles/theme";

import type { ColorShade } from "@typings/theme";
import type { HeadingStyleVars } from "@components/Heading/Heading.style";

type HeadingProps = {
  children: ReactNode;
  fgColor: ColorShade;
  fontSize: string;
  fontWeight: number;
  margin: string;
};

const Heading = ({
  children,
  fgColor,
  fontSize,
  fontWeight,
  margin,
}: HeadingProps) => {
  const headingStyle: HeadingStyleVars = {
    "--fg-color": THEME.colors[fgColor],
    "--font-size": fontSize,
    "--font-weight": fontWeight,
    "--margin": margin,
  };

  return <HeadingStyle style={headingStyle as any}>{children}</HeadingStyle>;
};

export default Heading;
