import { css } from "@emotion/react";
import styled from "@emotion/styled";
import THEME from "@styles/theme";

import { ColorShade } from "@typings/emotion";

type ButtonIconStyledProps = {
  bgColor: ColorShade;
  fgColor: ColorShade;
};

const ButtonIcon = styled.button<ButtonIconStyledProps>`
  padding: 0.5rem;
  border-radius: 0.375rem;
  height: 2.5rem;
  width: 2.5rem;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  ${({ bgColor, fgColor }) => css`
    background-color: hsla(${THEME.colors[bgColor]}, 0.1);

    svg {
      transition: all 200ms ease-in-out;
      color: hsla(${THEME.colors[fgColor]}, 0.9);
    }

    &:hover {
      background-color: hsla(${THEME.colors[bgColor]}, 0.15);

      svg {
        color: hsla(${THEME.colors[fgColor]}, 0.95);
      }
    }

    &:active {
      background-color: hsla(${THEME.colors[bgColor]}, 0.17);

      svg {
        color: hsla(${THEME.colors[fgColor]}, 0.97);
      }
    }
  `}
`;

export default ButtonIcon;
