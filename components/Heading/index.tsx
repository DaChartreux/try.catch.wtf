import React, { ReactNode } from "react";

import THEME from "@styles/theme";
import type { ColorShade } from "@typings/theme";

import style from "./Heading.module.css";

type HeadingProps = {
  children: ReactNode;
  fgColor: ColorShade;
  fontSize: string;
  fontWeight: number;
  margin: string;
};

type HeadingStyleVars = {
  "--fg-color": string;
  "--font-size": string;
  "--font-weight": number;
  "--margin": string;
};

const Heading = ({
  children,
  fgColor,
  fontSize,
  fontWeight,
  margin,
}: HeadingProps) => {
  const headingStyleVars: HeadingStyleVars = {
    "--fg-color": THEME.colors[fgColor],
    "--font-size": fontSize,
    "--font-weight": fontWeight,
    "--margin": margin,
  };

  return (
    <h1 className={style.heading} style={headingStyleVars as any}>
      {children}
    </h1>
  );
};

export default Heading;
