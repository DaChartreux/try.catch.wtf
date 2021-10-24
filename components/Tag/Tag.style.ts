import { m } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import THEME from "@styles/theme";

export type TagStyledProps = {
  bgColor: keyof typeof THEME["colors"];
  fgColor: string;
};

export const TagStyle = styled(m.a)<TagStyledProps>`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.625rem 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 0.375rem;
    transition: all 200ms ease-in-out;
  }

  ${({ bgColor }) => css`
    color: hsl(${THEME.colors[bgColor]});

    div {
      border-color: hsl(${THEME.colors[bgColor]});
      background-color: hsla(${THEME.colors[bgColor]}, 0.2);
    }

    &:hover {
      div {
        background-color: hsla(${THEME.colors[bgColor]}, 0.3);
      }
    }

    &:active {
      div {
        background-color: hsla(${THEME.colors[bgColor]}, 0.4);
      }
    }
  `};
`;
