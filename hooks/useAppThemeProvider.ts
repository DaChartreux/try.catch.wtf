import { useState, useEffect } from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";

type AppTheme = "light" | "dark";

export const useAppThemeProvider = () => {
  const [appTheme, setAppTheme] = useState<AppTheme>("light");
  const { value: newAppTheme } = useLocalStorage("__APP_THEME__");

  const changeTheme = () => {
    const inactiveTheme = appTheme === "light" ? "dark" : "light";

    setAppTheme(inactiveTheme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = appTheme;
    document.documentElement.style.colorScheme = appTheme;
    window.localStorage.setItem("__APP_THEME__", appTheme);
  }, [appTheme]);

  useEffect(() => {
    setAppTheme(newAppTheme === "dark" ? "dark" : "light");
  }, [newAppTheme]);

  return {
    appTheme,
    changeTheme,
  };
};
