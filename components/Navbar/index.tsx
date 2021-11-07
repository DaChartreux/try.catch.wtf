import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Variants } from "framer-motion";

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
import MenuIcon from "@components/icons/MenuIcon";
import useOnClickOutside from "@hooks/useClickOutside";
import { APP_THEME, useAppTheme } from "@context/AppThemeContext";
import { useViewport } from "@hooks/useViewPort";
import Logo from "@components/Logo";
import THEME from "@styles/theme";

import type {
  NavContainerStylesVars,
  LinkStylesVars,
} from "@components/Navbar/Navbar.style";

const Navbar = () => {
  const handleClickOutside = () => {
    navVariant === "open" && setNavVariant("close");
  };

  const { theme, setTheme } = useAppTheme();
  const { width } = useViewport();
  const { ref } = useOnClickOutside<HTMLDivElement>(handleClickOutside);
  const [navVariant, setNavVariant] = useState<"load" | "close" | "open">(
    "load",
  );

  const variants: Variants = {
    close: {
      translateY: 0,
      height: "5rem",
    },
    open: {
      translateY: 0,
      height: "17rem",
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.02,
      },
    },
    initial: { translateY: -64 },
    load: { translateY: 0 },
  };

  const cb = useCallback(() => {
    const appTheme =
      theme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK;
    setTheme(appTheme);
  }, [setTheme, theme]);

  const navContainerStyle: NavContainerStylesVars = {
    "--bg-color": THEME.colors["bg-100"],
  };

  const linkStyle: LinkStylesVars = {
    "--fg-color": THEME.colors["fg-100"],
  };

  return (
    <>
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
        style={navContainerStyle as any}
      >
        <NavInnerContainer>
          <Link href="/" passHref>
            <HomeLinkStyle>
              <Logo />
            </HomeLinkStyle>
          </Link>
          {width > 640 && (
            <NavStyle>
              <ButtonIcon onClick={cb} bgColor="fg-100" fgColor="fg-100">
                {theme === APP_THEME.DARK ? <SunIcon /> : <MoonIcon />}
              </ButtonIcon>
              <Link href="/" passHref>
                <LinkStyle style={linkStyle as any}>Blog</LinkStyle>
              </Link>
              <Link href="/" passHref>
                <LinkStyle style={linkStyle as any}>About</LinkStyle>
              </Link>
            </NavStyle>
          )}
          {width <= 640 && (
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
          )}
        </NavInnerContainer>
        {width <= 640 && (
          <>
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
          </>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;
