import React, { ElementType, ReactNode } from "react";
import styled from "@emotion/styled";

import THEME from "@styles/theme";

import type { ColorShade } from "@typings/theme";

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

const ButtonIconStyle = styled.button`
  width: 2.5rem;
  padding: 0.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  color: hsla(var(--btn-fg), 0.7);
  background-color: hsla(var(--btn-bg), 0.1);

  svg {
    transition: all 200ms ease-in-out;
  }

  &:hover {
    background-color: hsla(var(--btn-bg), 0.15);
    color: hsla(var(--btn-fg), 1);
  }

  &:active {
    background-color: hsla(var(--btn-bg), 0.2);
    color: hsla(var(--btn-fg), 0.95);
  }
`;

const ButtonIcon = ({ fgColor, bgColor, ...props }: ButtonIconStyleProps) => {
  const style = {
    "--btn-fg": THEME.colors[fgColor],
    "--btn-bg": THEME.colors[bgColor],
  };

  return <ButtonIconStyle style={style as any} {...props}></ButtonIconStyle>;
};

export default ButtonIcon;
