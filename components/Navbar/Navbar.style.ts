import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import { ColorShade } from "@typings/theme";
import THEME from "@styles/theme";

type NavContainerStyles = {
  bgColor: ColorShade;
};

type LinkStyledProps = {
  fgColor: ColorShade;
};

export const NavContainer = styled(motion.div)<NavContainerStyles>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 2rem;
  backdrop-filter: blur(0.5rem);
  background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.85);
  transition: background-color 200ms ease-in-out;

  @media (max-width: 1280px) {
    padding: 0 1rem;
  }

  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const NavInnerContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  height: 5rem;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px hsla(${THEME.colors["fg-100"]}, 0.08) solid;

  @media (max-width: 640px) {
    height: 5rem;
  }
`;

export const NavStyle = styled.nav`
  display: inline-flex;
  align-items: center;
`;

export const HomeLinkStyle = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  color: hsl(${THEME.colors["fg-100"]});
  height: fit-content;
  text-decoration: none;
`;

export const LinkStyle = styled.a<LinkStyledProps>`
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

export const MenuItemStyle = styled(motion.div)`
  height: 4rem;
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
    margin: 0;
  }
`;
