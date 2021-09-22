import React from "react";
import Link from "next/link";
import Button from "@components/Button";
import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import { useAppTheme } from "@components/ui/AppThemeProvider";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import styled from "styled-components";
import Spacer from "@components/Spacer";

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
  font-weight: 800;
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

const LinkStyled = styled.div`
  font-weight: 600;
  position: relative;
  height: fit-content;
  margin-inline-start: 1rem;
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
            <Button
              onClick={changeTheme}
              bgColor={"transparent"}
              hoverBgColor={useAppThemeValue("#F5F5F5", "#262626")}
              activeBgColor={"transparent"}
              fgColor={useAppThemeValue("#000000", "#ffffff")}
            >
              {useAppThemeValue(<SunIcon />, <MoonIcon />)}
            </Button>
            <Link href="/" passHref>
              <LinkStyled>Amit P</LinkStyled>
            </Link>
            <Link href="/" passHref>
              <LinkStyled>Amit P</LinkStyled>
            </Link>
          </NavStyled>
        </NavInnerContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
