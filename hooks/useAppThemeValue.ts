import { useAppTheme } from "@components/ui/AppThemeProvider";

export const useAppThemeValue = <T>(light: T, dark: T) => {
  const { appTheme } = useAppTheme();

  return appTheme === "light" ? light : dark;
};
