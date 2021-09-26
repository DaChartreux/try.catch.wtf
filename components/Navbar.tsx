import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import ButtonIcon from "@components/ButtonIcon";
import { useAppTheme } from "@components/ui/AppThemeProvider";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";

type NavContainerStyles = {
  bgColor: ColorShade;
};

const NavContainer = styled.div<NavContainerStyles>`
  position: sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${({ theme: { colors }, bgColor }) => colors[bgColor]}aa;
`;

const NavInnerContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  height: 4rem;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const NavStyled = styled.nav`
  display: inline-flex;
  align-items: center;
`;

const HomeLinkStyled = styled.div<LinkStyledProps>`
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  height: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    background-color: ${({ theme: { colors } }) => colors["pink.500"]};
    height: 0.25rem;
    width: 2rem;
    position: absolute;
    bottom: -0.25rem;
    left: 0;
  }

  ${({ theme: { colors }, fgColor, fgHoverColor, fgActiveColor }) => css`
    color: ${colors[fgColor]};

    &:hover {
      color: ${colors[fgHoverColor]};
    }

    &:active {
      color: ${colors[fgActiveColor]};
    }
  `}
`;

type LinkStyledProps = {
  fgColor: ColorShade;
  fgHoverColor: ColorShade;
  fgActiveColor: ColorShade;
};

const LinkStyled = styled.a<LinkStyledProps>`
  font-weight: 600;
  position: relative;
  height: fit-content;
  margin-inline-start: 1rem;
  text-decoration: none;
  cursor: pointer;

  ${({ theme: { colors }, fgColor, fgHoverColor, fgActiveColor }) => css`
    color: ${colors[fgColor]};

    &:hover {
      color: ${colors[fgHoverColor]};
    }

    &:active {
      color: ${colors[fgActiveColor]};
    }
  `}
`;

const Navbar = () => {
  const { changeTheme } = useAppTheme();

  return (
    <NavContainer bgColor={useAppThemeValue<ColorShade>("white", "black")}>
      <NavInnerContainer>
        <Link href="/" passHref>
          <HomeLinkStyled
            fgColor={useAppThemeValue<ColorShade>("yellow.400", "yellow.300")}
            fgHoverColor={useAppThemeValue<ColorShade>(
              "yellow.500",
              "yellow.400"
            )}
            fgActiveColor={useAppThemeValue<ColorShade>(
              "yellow.600",
              "yellow.500"
            )}
          >
            Amit P
          </HomeLinkStyled>
        </Link>
        <NavStyled>
          <ButtonIcon
            onClick={changeTheme}
            bgColor="transparent"
            bgHoverColor="transparent"
            bgActiveColor="transparent"
            fgColor="transparent"
            fgSvgColor={useAppThemeValue<ColorShade>("gray.800", "gray.100")}
            fgHoverSvgColor={useAppThemeValue<ColorShade>(
              "gray.700",
              "gray.300"
            )}
            fgActiveSvgColor={useAppThemeValue<ColorShade>(
              "gray.600",
              "gray.400"
            )}
          >
            {useAppThemeValue(<SunIcon />, <MoonIcon />)}
          </ButtonIcon>
          <Link href="/" passHref>
            <LinkStyled
              fgColor={useAppThemeValue<ColorShade>("gray.800", "gray.100")}
              fgHoverColor={useAppThemeValue<ColorShade>(
                "gray.700",
                "gray.300"
              )}
              fgActiveColor={useAppThemeValue<ColorShade>(
                "gray.600",
                "gray.400"
              )}
            >
              Blog
            </LinkStyled>
          </Link>
          <Link href="/" passHref>
            <LinkStyled
              fgColor={useAppThemeValue<ColorShade>("gray.800", "gray.100")}
              fgHoverColor={useAppThemeValue<ColorShade>(
                "gray.700",
                "gray.300"
              )}
              fgActiveColor={useAppThemeValue<ColorShade>(
                "gray.600",
                "gray.400"
              )}
            >
              About
            </LinkStyled>
          </Link>
        </NavStyled>
      </NavInnerContainer>
    </NavContainer>
  );
};

export default Navbar;
