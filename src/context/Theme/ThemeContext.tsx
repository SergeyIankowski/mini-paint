/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, FC, ReactNode, useState } from "react";
import LocalStorageKeys from "../../models/LocalStorageKeys";
import ThemesNames from "../../models/ThemesNames";
import { ThemeContextType, ThemeProviderType } from "./ThemeContext.type";

type ThemeProviderProps = {
  children: ReactNode;
};

const themeKey = LocalStorageKeys.theme;

const defaultTheme: ThemeContextType =
  (localStorage.getItem(themeKey) as ThemeContextType) || ThemesNames.light;

const ThemeContext = createContext<ThemeProviderType>({ theme: defaultTheme, saveTheme: () => {} });

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeContextType>(defaultTheme);

  const saveTheme = (values: ThemeContextType) => {
    setCurrentTheme(values);
    localStorage.setItem(themeKey, values);
  };

  const themeObj = { theme: currentTheme, saveTheme };

  return <ThemeContext.Provider value={themeObj}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
