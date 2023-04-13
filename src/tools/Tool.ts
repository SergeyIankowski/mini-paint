import ToolInterface from "../models/ToolInterface";

export default class Tool implements ToolInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
  }

  set fillColor(color: string) {
    this.ctx!.fillStyle = color;
  }

  set strokeColor(color: string) {
    this.ctx!.strokeStyle = color;
  }

  set lineWidth(value: number) {
    this.ctx!.lineWidth = value;
  }

  destroyEvents() {
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
  }
}
