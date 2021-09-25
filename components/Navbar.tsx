import React from "react";
import Link from "next/link";
import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import { useAppTheme } from "@components/ui/AppThemeProvider";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import styled from "styled-components";
import Spacer from "@components/Spacer";
import ButtonIcon from "@components/ButtonIcon";

type NavContainerStyles = {
  bgColor: string;
};

const NavContainer = styled.div<NavContainerStyles>`
  position: sticky;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${(props) => props.bgColor};
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

const HomeLinkStyled = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  height: fit-content;

  &::after {
    content: "";
    background-color: #ff006a;
    height: 0.25rem;
    width: 2rem;
    position: absolute;
    bottom: -0.25rem;
    left: 0;
  }
`;

const LinkStyled = styled.a`
  font-weight: 600;
  position: relative;
  height: fit-content;
  margin-inline-start: 1rem;
  text-decoration: none;
  color: red;
`;

const Navbar = () => {
  const { changeTheme } = useAppTheme();

  return (
    <>
      <Spacer height="3rem" width="100%" />
      <NavContainer
        bgColor={useAppThemeValue(
          "rgba(255, 255, 255, 0.6)",
          "rgba(0, 0, 0, 0.6)"
        )}
      >
        <NavInnerContainer>
          <Link href="/" passHref>
            <HomeLinkStyled>Amit P</HomeLinkStyled>
          </Link>
          <NavStyled>
            <ButtonIcon
              onClick={changeTheme}
              bgColor="transparent"
              bgHoverColor="transparent"
              bgActiveColor="transparent"
              fgColor="transparent"
              fgSvgColor={useAppThemeValue("#262626", "#F5F5F5")}
              fgHoverSvgColor={useAppThemeValue("#404040", "#E5E5E5")}
              fgActiveSvgColor={useAppThemeValue("#525252", "#D4D4D4")}
            >
              {useAppThemeValue(<SunIcon />, <MoonIcon />)}
            </ButtonIcon>
            <Link href="/" passHref>
              <LinkStyled>Blog</LinkStyled>
            </Link>
            <Link href="/" passHref>
              <LinkStyled>About</LinkStyled>
            </Link>
          </NavStyled>
        </NavInnerContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
