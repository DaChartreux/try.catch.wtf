import React from "react";

import AppThemeContext from "@components/ui/AppThemeContext";

export const useAppTheme = <T>(light: T, dark: T) => {
  const { appTheme } = React.useContext(AppThemeContext);

  return appTheme === "light" ? light : dark;
};
