import { useContext } from "react";
import MoonIcon from "../../../assets/img/moon.png";
import SunIcon from "../../../assets/img/sun.png";
import ThemeContext from "../../../context/Theme/ThemeContext";
import classes from "./themeButton.module.scss";

const setIcon = (themeName: string) => {
  switch (themeName) {
    case "light": {
      return <img src={MoonIcon} alt="" className={classes.themeIcon} />;
    }
    case "dark": {
      return <img src={SunIcon} alt="" className={classes.themeIcon} />;
    }
    default: {
      return <img src={MoonIcon} alt="" className={classes.themeIcon} />;
    }
  }
};

const ThemeButton = () => {
  const { theme, saveTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={classes.buttonTheme}
      onClick={() => saveTheme(theme === "light" ? "dark" : "light")}
    >
      {setIcon(theme)}
    </button>
  );
};

export default ThemeButton;
