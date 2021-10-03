import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";

import { useAppThemeProvider } from "@hooks/useAppThemeProvider";
import THEME from "@styles/theme";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeContext = React.createContext<
  ReturnType<typeof useAppThemeProvider>
>({
  appTheme: "light",
  changeTheme: Function,
});

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const theme = useAppThemeProvider();

  return (
    <AppThemeContext.Provider value={theme}>
      <ThemeProvider theme={THEME[theme.appTheme]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);

export default AppThemeProvider;
