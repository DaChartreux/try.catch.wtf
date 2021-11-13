import React, { useCallback, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import ButtonIcon from "@components/ButtonIcon";

import MenuIcon from "@components/icons/MenuIcon";
import useOnClickOutside from "@hooks/useClickOutside";
import { APP_THEME, useAppTheme } from "@context/AppThemeContext";
import { useViewport } from "@hooks/useViewPort";
import Logo from "@components/Logo";
import THEME from "@styles/theme";

import style from "./Navbar.module.css";

type LinkStylesVars = {
  "--fg-color": string;
};

type NavContainerStylesVars = {
  "--bg-color": string;
};

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
      <motion.div
        className={style.navContainer}
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
        <div className={style.navInnerContainer}>
          <Link href="/" passHref>
            <a className={style.homeLinkStyle}>
              <Logo />
            </a>
          </Link>
          {width > 640 && (
            <nav className={style.navStyle}>
              <ButtonIcon onClick={cb} bgColor="fg-100" fgColor="fg-100">
                {theme === APP_THEME.DARK ? <SunIcon /> : <MoonIcon />}
              </ButtonIcon>
              <Link href="/" passHref>
                <a className={style.linkStyle} style={linkStyle as any}>
                  Blog
                </a>
              </Link>
              <Link href="/" passHref>
                <a className={style.linkStyle} style={linkStyle as any}>
                  About
                </a>
              </Link>
            </nav>
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
        </div>
        {width <= 640 && (
          <>
            <motion.div
              className={style.menuItemStyle}
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
            </motion.div>
            <motion.div
              className={style.menuItemStyle}
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
            </motion.div>
            <motion.div
              className={style.menuItemStyle}
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
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
