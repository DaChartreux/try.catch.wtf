import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ColorShade } from "@typings/emotion";

type ButtonIconStyledProps = {
  bgColor: ColorShade;
  bgHoverColor: ColorShade;
  bgActiveColor: ColorShade;
  fgSvgColor: ColorShade;
  fgHoverSvgColor: ColorShade;
  fgActiveSvgColor: ColorShade;
};

const ButtonIcon = styled.button<ButtonIconStyledProps>`
  padding: 0.5rem;
  border-radius: 0.375rem;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  ${({
    theme: { colors },
    bgColor,
    bgHoverColor,
    bgActiveColor,
    fgSvgColor,
    fgHoverSvgColor,
    fgActiveSvgColor,
  }) => css`
    background-color: ${colors[bgColor]};

    svg {
      transition: all 200ms ease-in-out;
      color: ${colors[fgSvgColor]};
    }

    &:hover {
      background-color: ${colors[bgHoverColor]};

      svg {
        color: ${colors[fgHoverSvgColor]};
      }
    }

    &:active {
      background-color: ${colors[bgActiveColor]};

      svg {
        color: ${colors[fgActiveSvgColor]};
      }
    }
  `}
`;

export default ButtonIcon;
