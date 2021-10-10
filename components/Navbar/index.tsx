import React, { useState } from "react";
import Link from "next/link";

import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import ButtonIcon from "@components/ButtonIcon";
import {
  NavContainer,
  NavInnerContainer,
  HomeLinkStyled,
  NavStyled,
  LinkStyled,
} from "@components/Navbar/Navbar.style";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (window.localStorage.getItem("__APP_THEME__") as "light" | "dark") ??
      "dark",
  );

  return (
    <NavContainer
      initial={{ translateY: -64 }}
      animate={{ translateY: 0 }}
      layout
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      bgColor="color-bg"
    >
      <NavInnerContainer>
        <Link href="/" passHref>
          <HomeLinkStyled fgColor="color-primary-100">ABCD</HomeLinkStyled>
        </Link>
        <NavStyled>
          <ButtonIcon
            onClick={() => {
              const appTheme = theme === "dark" ? "light" : "dark";
              document.documentElement.dataset.theme = appTheme;
              document.documentElement.style.colorScheme = appTheme;
              window.localStorage.setItem("__APP_THEME__", appTheme);
              setTheme(appTheme);
            }}
            bgColor="color-fg"
            fgColor="color-fg"
          >
            {true ? <SunIcon /> : <MoonIcon />}
          </ButtonIcon>
          <Link href="/" passHref>
            <LinkStyled fgColor="color-fg">Blog</LinkStyled>
          </Link>
          <Link href="/" passHref>
            <LinkStyled fgColor="color-fg">About</LinkStyled>
          </Link>
        </NavStyled>
      </NavInnerContainer>
    </NavContainer>
  );
};

export default Navbar;
