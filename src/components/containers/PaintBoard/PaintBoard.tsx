import { FaCircle, FaEraser, FaPaintBrush, FaSave, FaSlash, FaStar } from "react-icons/fa";
import { MdRectangle } from "react-icons/md";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { BiPolygon } from "react-icons/bi";
import Tool from "../../view/Tool/Tool";
import classes from "./paintBoard.module.scss";
import Canvas from "../Canvas/Canvas";

const ICON_SIZE = 25;

const PaintBoard = () => {
  return (
    <section className={classes.container}>
      <div className={classes.tools}>
        <Tool drawCallback={() => {}}>
          <FaPaintBrush size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <MdRectangle size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <FaCircle size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <FaStar size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <BiPolygon size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <FaSlash size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <FaEraser size={ICON_SIZE} />
        </Tool>
      </div>
      <div className={classes.properties}>
        <input type="color" />
        <select name="size">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
        <Tool drawCallback={() => {}}>
          <TbArrowBackUp size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <TbArrowForwardUp size={ICON_SIZE} />
        </Tool>
        <Tool drawCallback={() => {}}>
          <FaSave size={ICON_SIZE} />
        </Tool>
      </div>
      <div className={classes.field}>
        <Canvas />
      </div>
    </section>
  );
};

export default PaintBoard;
