import { FC } from "react";
import ToolProps from "./interface";
import classes from "./tool.module.scss";

const Tool: FC<ToolProps> = ({ children, drawCallback }) => {
  return (
    <button type="button" className={classes.tool} onClick={drawCallback}>
      {children}
    </button>
  );
};

export default Tool;
