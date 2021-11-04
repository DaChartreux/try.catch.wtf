import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export enum APP_THEME {
  LIGHT = "light",
  DARK = "dark",
}

const AppThemeContext = createContext<ReturnType<typeof useAppThemeProvider>>({
  theme: APP_THEME.LIGHT,
  setTheme: (theme) => console.warn("no theme provider"),
});

export const useAppThemeProvider = () => {
  const [theme, setTheme] = useState<APP_THEME>(
    typeof window !== "undefined"
      ? (window.localStorage.getItem("__APP_THEME__") as APP_THEME) ??
          APP_THEME.LIGHT
      : APP_THEME.LIGHT,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("__APP_THEME__", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export const useAppTheme = () => useContext(AppThemeContext);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppThemeProvider();

  return (
    <AppThemeContext.Provider value={theme}>
      {children}
    </AppThemeContext.Provider>
  );
};
