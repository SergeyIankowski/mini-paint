import { useContext } from "react";
import MoonIcon from "../../../assets/img/moon.png";
import SunIcon from "../../../assets/img/sun.png";
import ThemeContext from "../../../context/Theme/ThemeContext";
import ThemesNames from "../../../models/ThemesNames";
import classes from "./themeButton.module.scss";

const setIcon = (themeName: string) => {
  switch (themeName) {
    case ThemesNames.light: {
      return <img src={MoonIcon} alt="" className={classes.themeIcon} />;
    }
    case ThemesNames.dark: {
      return <img src={SunIcon} alt="" className={classes.themeIcon} />;
    }
    default: {
      return <img src={MoonIcon} alt="" className={classes.themeIcon} />;
    }
  }
};

const ThemeButton = () => {
  const { theme, saveTheme } = useContext(ThemeContext);
  const changeThemeClickHandler = () =>
    saveTheme(theme === ThemesNames.light ? ThemesNames.dark : ThemesNames.light);
  return (
    <button type="button" className={classes.buttonTheme} onClick={changeThemeClickHandler}>
      {setIcon(theme)}
    </button>
  );
};

export default ThemeButton;
