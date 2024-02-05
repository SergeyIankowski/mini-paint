import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { canvasSlice } from "../../../store/reducers/canvasSlice";
import { toolSlice } from "../../../store/reducers/toolSlice";
import Brush from "../../../tools/Brush";
import classes from "./canvas.module.scss";

const Canvas = () => {
  const canvasRef = useRef(null);
  const { setTool } = toolSlice.actions;
  const { setCanvas, changeIsSendedStatus } = canvasSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCanvas(canvasRef.current!));
    dispatch(setTool(new Brush(canvasRef.current!)));
  }, []);
  const mouseDownHandler = () => {
    dispatch(changeIsSendedStatus(false));
  };
  return (
    <canvas
      ref={canvasRef}
      width={950}
      height={600}
      className={classes.canvas}
      onMouseDown={mouseDownHandler}
    />
  );
};

export default Canvas;
