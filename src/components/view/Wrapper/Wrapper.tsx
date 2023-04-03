import { FC, useContext } from "react";
import ThemeContext from "../../../context/Theme/ThemeContext";
import WrapperProps from "./interface";
import classes from "./wrapper.module.scss";

const light = { backgroundColor: "#ffffff", color: "#000000" };
const dark = { backgroundColor: "#808080", color: "white" };

const setTheme = (str: string) => {
  switch (str) {
    case "light": {
      return light;
      break;
    }
    case "dark": {
      return dark;
      break;
    }
    default: {
      return light;
    }
  }
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${classes.outerWrapper}`} style={setTheme(theme)}>
      <div className={classes.innerWrapper}>{children}</div>
    </div>
  );
};

export default Wrapper;
