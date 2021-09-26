import { ColorShade } from "@typings/styled";
import styled from "styled-components";

type ButtonIconStyledProps = {
  bgColor: string;
  bgHoverColor: string;
  bgActiveColor: string;
  fgColor: string;
  fgSvgColor: ColorShade;
  fgHoverSvgColor: ColorShade;
  fgActiveSvgColor: ColorShade;
};

const ButtonIcon = styled.button<ButtonIconStyledProps>`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fgColor};
  transition: all 200ms ease-in-out;
  outline: none;
  cursor: pointer;

  & {
    svg {
      color: ${({ theme: { colors }, fgSvgColor }) => colors[fgSvgColor]};
    }
  }

  &:hover {
    svg {
      color: ${({ theme: { colors }, fgHoverSvgColor }) =>
        colors[fgHoverSvgColor]};
    }
  }

  &:active {
    svg {
      color: ${({ theme: { colors }, fgActiveSvgColor }) =>
        colors[fgActiveSvgColor]};
    }
  }
`;

export default ButtonIcon;
