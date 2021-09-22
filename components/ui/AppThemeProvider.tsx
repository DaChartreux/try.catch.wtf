import React from "react";

import { useAppThemeProvider } from "@hooks/useAppThemeProvider";
import AppThemeContext from "@components/ui/AppThemeContext";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const theme = useAppThemeProvider();

  return (
    <AppThemeContext.Provider value={theme}>{children}</AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
