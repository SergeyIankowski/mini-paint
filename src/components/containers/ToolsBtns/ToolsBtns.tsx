import BrushIcon from "../../../assets/img/brush.png";
import RectangleIcon from "../../../assets/img/rectangle.png";
import CircleIcon from "../../../assets/img/circle.png";
import StarIcon from "../../../assets/img/star.png";
import PolyShapeIcon from "../../../assets/img/polyshape.png";
import EraserIcon from "../../../assets/img/eraser.png";
import SlashIcon from "../../../assets/img/slash.png";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toolSlice } from "../../../store/reducers/toolSlice";
import Brush from "../../../tools/Brush";
import classes from "./tollsBtns.module.scss";
import Circle from "../../../tools/Circle";
import Line from "../../../tools/Line";
import Eraser from "../../../tools/Eraser";
import Rectangle from "../../../tools/Rectangle";
import PolyAngle from "../../../tools/PolyAngle";
import Star from "../../../tools/Star";

const ToolsBtns = () => {
  const { canvas } = useAppSelector((state) => state.canvas);
  const { setTool } = toolSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Brush(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={BrushIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Line(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={SlashIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Rectangle(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={RectangleIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Circle(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={CircleIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Star(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={StarIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new PolyAngle(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={PolyShapeIcon} alt="" />
      </button>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const tool = new Eraser(canvas as HTMLCanvasElement);
          dispatch(setTool(tool));
        }}
      >
        <img className={classes.icon} src={EraserIcon} alt="" />
      </button>
    </>
  );
};

export default ToolsBtns;
