import { FC } from "react";
import Save from "../../../assets/img/save.png";
import useFirebaseContext from "../../../hooks/firebase";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import sendSnapshot from "../../../store/thunks/sendSnapshot";

import classes from "./controlBtns.module.scss";
import ControlBtnsProps from "./interface";

const ControlBtns: FC<ControlBtnsProps> = ({ user }) => {
  const { db } = useFirebaseContext();
  const { canvas } = useAppSelector((state) => state.canvas);
  const dispatch = useAppDispatch();
  const saveHandler = async () => {
    await dispatch(sendSnapshot(db, user, canvas.toDataURL()));
  };
  return (
    <button className={classes.button} type="button" onClick={saveHandler}>
      <img className={classes.icon} src={Save} alt="" />
    </button>
  );
};

export default ControlBtns;
