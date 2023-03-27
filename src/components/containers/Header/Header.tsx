import { SlLogout } from "react-icons/sl";
import { GiUbisoftSun, GiMoonOrbit } from "react-icons/gi";
import { useState } from "react";
import { logOut } from "../../../firebase";
import classes from "./header.module.scss";

const BUTTON_ICON_SIZE = 20;
const THEME_ICON_SIZE = 40;

const Header = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <header className={classes.header}>
      <button type="button" className={classes.buttonTheme} onClick={() => setIsLight(!isLight)}>
        {isLight ? (
          <GiMoonOrbit className={classes.themeIcon} size={THEME_ICON_SIZE} />
        ) : (
          <GiUbisoftSun className={classes.themeIcon} size={THEME_ICON_SIZE} />
        )}
      </button>
      <button type="button" className={classes.buttonLogout} onClick={logOut}>
        <SlLogout size={BUTTON_ICON_SIZE} className={classes.logoutIcon} />
        Logout
      </button>
    </header>
  );
};

export default Header;
