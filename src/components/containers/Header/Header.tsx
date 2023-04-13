import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../firebase";
import LogoutIcon from "../../../assets/img/logout.png";
import HeaderProps from "./interface";
import ThemeButton from "../ThemeButton/ThemeButton";
import classes from "./header.module.scss";

const Header: FC<HeaderProps> = ({ user, pathToPage }) => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <p className={classes.email}>{user?.email || " "}</p>
      <ThemeButton />
      <button type="button" className={classes.buttonLogout} onClick={() => navigate(pathToPage)}>
        {pathToPage.slice(1).split("-").join(" ")}
      </button>
      <button type="button" className={classes.buttonLogout} onClick={logOut}>
        <img src={LogoutIcon} className={classes.logoutIcon} alt="" />
        Logout
      </button>
    </header>
  );
};

export default Header;
