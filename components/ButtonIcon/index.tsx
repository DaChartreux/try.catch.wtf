import React, { ElementType, ReactNode } from "react";

import THEME from "@styles/theme";
import type { ColorShade } from "@typings/theme";

import style from "./ButtonIcon.module.css";

type ButtonIconStyleProps = {
  children: ReactNode;
  bgColor: ColorShade;
  fgColor: ColorShade;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: any;
};

const ButtonIcon = ({ fgColor, bgColor, ...props }: ButtonIconStyleProps) => {
  const styleVars = {
    "--btn-fg": THEME.colors[fgColor],
    "--btn-bg": THEME.colors[bgColor],
  };

  return (
    <button
      className={style.buttonIcon}
      style={styleVars as any}
      {...props}
    ></button>
  );
};

export default ButtonIcon;
