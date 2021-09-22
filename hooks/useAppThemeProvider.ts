import React from "react";

type AppTheme = "light" | "dark";

export const useAppThemeProvider = () => {
  const [appTheme, setAppTheme] = React.useState<AppTheme>(
    (document.documentElement.getAttribute("class")?.split(" ")[-1] as
      | AppTheme
      | undefined) ?? "light"
  );

  const changeTheme = () => {
    const inactiveTheme = appTheme === "light" ? "dark" : "light";

    setAppTheme(inactiveTheme);
  };

  React.useEffect(() => {
    document.documentElement.classList.remove(
      appTheme === "light" ? "dark" : "light"
    );
    document.documentElement.classList.add(appTheme);
    window.localStorage.setItem("__APP_THEME__", appTheme);
  }, [appTheme]);

  return {
    appTheme,
    changeTheme,
  };
};
