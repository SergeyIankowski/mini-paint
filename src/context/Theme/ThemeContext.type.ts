import ThemesNames from "../../models/ThemesNames";

export type ThemeContextType = ThemesNames.light | ThemesNames.dark;
export type ThemeProviderType = {
  theme: ThemeContextType;
  saveTheme: (values: ThemeContextType) => void;
};
