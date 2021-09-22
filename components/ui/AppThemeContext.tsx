import React from "react";

import { useAppThemeProvider } from "@hooks/useAppThemeProvider";

const AppThemeContext = React.createContext<
  ReturnType<typeof useAppThemeProvider>
>({
  appTheme: "light",
  changeTheme: Function,
});

export default AppThemeContext;
