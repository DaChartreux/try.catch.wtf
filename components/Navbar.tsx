import React from "react";
import Link from "next/link";
import { useAppTheme } from "@hooks/useAppTheme";
import Button from "@components/Button";
import MoonIcon from "@components/icons/MoonIcon";
import SunIcon from "@components/icons/SunIcon";
import AppThemeContext from "@components/ui/AppThemeContext";

const Navbar = () => {
  const { changeTheme } = React.useContext(AppThemeContext);

  return (
    <nav className="flex pt-12 ">
      <Link href="/">Amit P</Link>
      <Button
        onClick={changeTheme}
        bgColor="bg-purple-500 dark:bg-purple-300"
        hoverBgColor="hover:bg-purple-600 dark:hover:bg-purple-400"
        activeBgColor="active:bg-purple-700 dark:active:bg-purple-500"
        fgColor="text-white dark:text-black"
      >
        {useAppTheme(<SunIcon />, <MoonIcon />)}
      </Button>
    </nav>
  );
};

export default Navbar;
