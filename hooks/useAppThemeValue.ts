import { useAppTheme } from "@components/ui/AppThemeProvider";
import React from "react";

export const useAppThemeValue = <T>(light: T, dark: T) => {
  const { appTheme } = useAppTheme();

  return appTheme === "light" ? light : dark;
};
