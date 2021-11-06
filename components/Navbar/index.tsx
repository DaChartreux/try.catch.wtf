import React, { useState } from "react";
import Link from "next/link";

import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import ButtonIcon from "@components/ButtonIcon";
import {
  NavContainer,
  NavInnerContainer,
  HomeLinkStyle,
  NavStyle,
  LinkStyle,
  MenuItemStyle,
} from "@components/Navbar/Navbar.style";
import styled from "@emotion/styled";
import MenuIcon from "@components/icons/MenuIcon";
import { Variants } from "framer-motion";
import useOnClickOutside from "@hooks/useClickOutside";
import Logo from "@components/Logo";
import { APP_THEME, useAppTheme } from "context/AppThemeContext";

const DesktopNavbarStyle = styled(NavStyle)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavbarStyle = styled(NavStyle)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const handleClickOutside = () => {
    navVariant === "open" && setNavVariant("close");
  };

  const { theme, setTheme } = useAppTheme();
  const { ref } = useOnClickOutside<HTMLDivElement>(handleClickOutside);
  const [navVariant, setNavVariant] = useState<"load" | "close" | "open">(
    "load",
  );

  const variants: Variants = {
    close: {
      height: "5rem",
    },
    open: {
      height: "17rem",
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.02,
      },
    },
    initial: { translateY: -64 },
    load: { translateY: 0 },
  };

  return (
    <NavContainer
      ref={ref}
      initial="initial"
      animate={navVariant}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      bgColor="bg-100"
    >
      <NavInnerContainer>
        <Link href="/" passHref>
          <HomeLinkStyle>
            <Logo />
          </HomeLinkStyle>
        </Link>
        <DesktopNavbarStyle>
          <ButtonIcon
            onClick={() => {
              const appTheme =
                theme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK;
              setTheme(appTheme);
            }}
            bgColor="fg-100"
            fgColor="fg-100"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </ButtonIcon>
          <Link href="/" passHref>
            <LinkStyle fgColor="fg-100">Blog</LinkStyle>
          </Link>
          <Link href="/" passHref>
            <LinkStyle fgColor="fg-100">About</LinkStyle>
          </Link>
        </DesktopNavbarStyle>
        <MobileNavbarStyle>
          <ButtonIcon
            onClick={() => {
              setNavVariant((variant) =>
                variant === "load"
                  ? "open"
                  : variant === "open"
                  ? "close"
                  : "open",
              );
            }}
            bgColor="fg-100"
            fgColor="fg-100"
          >
            <MenuIcon />
          </ButtonIcon>
        </MobileNavbarStyle>
      </NavInnerContainer>
      <MenuItemStyle
        variants={{
          initial: { y: -20, display: "none" },
          close: { y: -20, display: "none" },
          open: {
            y: 0,
            display: "flex",
          },
        }}
      >
        <p>Blog</p>
      </MenuItemStyle>
      <MenuItemStyle
        variants={{
          initial: { y: -20, display: "none" },
          close: { y: -20, display: "none" },
          open: {
            y: 0,
            display: "flex",
          },
        }}
      >
        <p>About</p>
      </MenuItemStyle>
      <MenuItemStyle
        variants={{
          initial: { y: -20, display: "none" },
          close: { y: -20, display: "none" },
          open: {
            y: 0,
            display: "flex",
          },
        }}
      >
        <ButtonIcon
          onClick={() => {
            const appTheme =
              theme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK;
            setTheme(appTheme);
          }}
          bgColor="fg-100"
          fgColor="fg-100"
        >
          {theme === APP_THEME.DARK ? <SunIcon /> : <MoonIcon />}
        </ButtonIcon>
      </MenuItemStyle>
    </NavContainer>
  );
};

export default Navbar;
