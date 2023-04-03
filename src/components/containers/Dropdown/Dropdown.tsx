import { ChangeEvent, FC, useEffect } from "react";
import ReceivedStoreData from "../../../models/ReseivedStoreData";
import classes from "./dropdown.module.scss";
import DropdownProps from "./interface";

const Dropdown: FC<DropdownProps> = ({ options, changeFilterCallback }) => {
  useEffect(() => {});

  const optionsList = options.map((email) => (
    <option key={email} value={email}>
      {email}
    </option>
  ));

  const changleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      return changeFilterCallback(() => () => true);
    }
    return changeFilterCallback(() => (item: ReceivedStoreData) => item.email === e.target.value);
  };
  return (
    <select className={classes.dropDownInput} onChange={changleHandler}>
      <option value="all">All</option>
      {optionsList}
    </select>
  );
};

export default Dropdown;
