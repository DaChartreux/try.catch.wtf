import styled from "@emotion/styled";

import THEME from "@styles/theme";

import type { ColorShade } from "@typings/theme";

type ButtonIconStyledProps = {
  bgColor: ColorShade;
  fgColor: ColorShade;
  href?: string;
  target?: string;
  rel?: string;
};

const ButtonIcon = styled.button<ButtonIconStyledProps>`
  width: 2.5rem;
  padding: 0.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  color: hsla(${({ fgColor }) => THEME.colors[fgColor]}, 0.7);
  background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.1);

  svg {
    transition: all 200ms ease-in-out;
  }

  &:hover {
    background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.15);
    color: hsla(${({ fgColor }) => THEME.colors[fgColor]}, 1);
  }

  &:active {
    background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.2);
    color: hsla(${({ fgColor }) => THEME.colors[fgColor]}, 0.95);
  }
`;

export default ButtonIcon;
