export type ThemeContextType = "light" | "dark";
export type ThemeProviderType = {
  theme: ThemeContextType;
  saveTheme: (values: ThemeContextType) => void;
};
