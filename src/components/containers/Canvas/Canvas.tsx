import { useEffect, useRef } from "react";
import classes from "./canvas.module.scss";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(canvasRef.current);
  }, []);
  return <canvas ref={canvasRef} width={800} height={400} className={classes.canvas} />;
};

export default Canvas;
