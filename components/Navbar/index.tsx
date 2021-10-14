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
    setNavVariant("close");
  };

  const { ref } = useOnClickOutside<HTMLDivElement>(handleClickOutside);

  const [theme, setTheme] = useState<"light" | "dark">(
    (window.localStorage.getItem("__APP_THEME__") as "light" | "dark") ??
      "dark",
  );
  const [navVariant, setNavVariant] = useState<"load" | "close" | "open">(
    "load",
  );

  const variants: Variants = {
    close: {
      height: "5rem",
    },
    open: {
      height: "13rem",
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
      layout
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      bgColor="bg"
    >
      <NavInnerContainer>
        <Link href="/" passHref>
          <HomeLinkStyle fgColor="primary-100">ABCD</HomeLinkStyle>
        </Link>
        <DesktopNavbarStyle>
          <ButtonIcon
            onClick={() => {
              const appTheme = theme === "dark" ? "light" : "dark";
              document.documentElement.dataset.theme = appTheme;
              document.documentElement.style.colorScheme = appTheme;
              window.localStorage.setItem("__APP_THEME__", appTheme);
              setTheme(appTheme);
            }}
            bgColor="fg"
            fgColor="fg"
          >
            {true ? <SunIcon /> : <MoonIcon />}
          </ButtonIcon>
          <Link href="/" passHref>
            <LinkStyle fgColor="fg">Blog</LinkStyle>
          </Link>
          <Link href="/" passHref>
            <LinkStyle fgColor="fg">About</LinkStyle>
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
            bgColor="fg"
            fgColor="fg"
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
    </NavContainer>
  );
};

export default Navbar;
