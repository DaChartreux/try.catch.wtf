import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import { ColorShade } from "@typings/emotion";
import THEME from "@styles/theme";

type NavContainerStyles = {
  bgColor: ColorShade;
};

type LinkStyledProps = {
  fgColor: ColorShade;
};

export const NavContainer = styled(motion.div)<NavContainerStyles>`
  position: sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(0.5rem);
  background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.85);
  transition: background-color 200ms ease-in-out;
`;

export const NavInnerContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  height: 5.75rem;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px hsla(${THEME.colors["color-fg"]}, 0.08) solid;

  @media (max-width: 1536px) {
    background-color: red;
  }

  @media (max-width: 1280px) {
    background-color: green;
  }

  @media (max-width: 1024px) {
    padding: 0 4rem;
    background-color: blue;
  }

  @media (max-width: 768px) {
    height: 5rem;
    background-color: yellow;
  }

  @media (max-width: 640px) {
    height: 4rem;
    padding: 0 2rem;
    background-color: beige;
  }
`;

export const NavStyled = styled.nav`
  display: inline-flex;
  align-items: center;
`;

export const HomeLinkStyled = styled.div<LinkStyledProps>`
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  height: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    background-color: hsl(${THEME.colors["color-primary-100"]});
    height: 0.25rem;
    width: 2rem;
    position: absolute;
    bottom: -0.25rem;
    left: 0;
  }

  ${({ fgColor }) => css`
    color: hsl(${THEME.colors[fgColor]});

    &:hover {
      color: hsl(${THEME.colors[fgColor]});
    }

    &:active {
      color: hsl(${THEME.colors[fgColor]});
    }
  `}
`;

export const LinkStyled = styled.a<LinkStyledProps>`
  font-weight: 600;
  position: relative;
  height: fit-content;
  margin-inline-start: 1rem;
  text-decoration: none;
  cursor: pointer;

  ${({ fgColor }) => css`
    color: hsl(${THEME.colors[fgColor]});

    &:hover {
      color: hsl(${THEME.colors[fgColor]});
    }

    &:active {
      color: hsl(${THEME.colors[fgColor]});
    }
  `}
`;
