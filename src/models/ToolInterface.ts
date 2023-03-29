interface ToolInterface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  destroyEvents: () => void;
}

export default ToolInterface;
