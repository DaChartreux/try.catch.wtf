import React from "react";

type AppTheme = "light" | "dark";

export const useAppThemeProvider = () => {
  const [appTheme, setAppTheme] = React.useState<AppTheme>(
    (document.documentElement.dataset.theme as AppTheme | undefined) ?? "light"
  );

  const changeTheme = () => {
    const inactiveTheme = appTheme === "light" ? "dark" : "light";

    setAppTheme(inactiveTheme);
  };

  React.useEffect(() => {
    document.documentElement.dataset.theme = appTheme;
    window.localStorage.setItem("__APP_THEME__", appTheme);
  }, [appTheme]);

  return {
    appTheme,
    changeTheme,
  };
};
