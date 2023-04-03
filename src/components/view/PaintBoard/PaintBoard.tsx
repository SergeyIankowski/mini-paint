import { FC } from "react";
import Canvas from "../../containers/Canvas/Canvas";
import ToolsBtns from "../../containers/ToolsBtns/ToolsBtns";
import ControlBtns from "../../containers/ControlBtns/ControlBtns";
import classes from "./paintBoard.module.scss";
import PaintProperties from "../../containers/PaintProperties/PaintProperties";
import PaintBoardProps from "./interface";

const PaintBoard: FC<PaintBoardProps> = ({ user }) => {
  return (
    <section className={classes.container}>
      <div className={classes.menu}>
        <ControlBtns user={user} />
      </div>
      <div className={classes.tools}>
        <ToolsBtns />
      </div>
      <div className={classes.field}>
        <Canvas />
      </div>
      <div className={classes.properties}>
        <PaintProperties />
      </div>
    </section>
  );
};

export default PaintBoard;
