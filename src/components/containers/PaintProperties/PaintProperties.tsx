import { useAppDispatch } from "../../../hooks/redux";
import { toolSlice } from "../../../store/reducers/toolSlice";
import classes from "./paintProperties.module.scss";

const PaintProperties = () => {
  const { setFillColor, setStrokeColor, setLineWidth } = toolSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <>
      <label htmlFor="fillChanging" className={classes.label}>
        Fill:
        <input
          id="Fill changing"
          type="color"
          onChange={(e) => dispatch(setFillColor(e.target!.value))}
        />
      </label>
      <label htmlFor="strokeChanging" className={classes.label}>
        Stroke:
        <input
          id="strokeChanging"
          type="color"
          onChange={(e) => dispatch(setStrokeColor(e.target!.value))}
        />
      </label>
      <label htmlFor="lineWidth" className={classes.label}>
        Line Width:
        <input
          className={classes.number}
          id="lineWidth"
          type="number"
          defaultValue={1}
          min={1}
          max={100}
          onChange={(e) => {
            dispatch(setLineWidth(+e.target.value));
          }}
        />
      </label>
    </>
  );
};

export default PaintProperties;
