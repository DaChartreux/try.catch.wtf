import React, { useContext } from "react";

import { useAppThemeProvider } from "@hooks/useAppThemeProvider";

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
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);

export default AppThemeProvider;
