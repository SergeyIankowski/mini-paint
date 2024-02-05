import Tool from "./Tool";

export default class Eraser extends Tool {
  mouseDown: boolean;

  startX: number;

  startY: number;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.startX = 0;
    this.startY = 0;
    this.listen();
    this.mouseDown = false;
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
    this.ctx!.restore();
  }

  mouseDownHandler(e: MouseEvent) {
    this.startX = e.pageX - (e.target as HTMLElement).offsetLeft;
    this.startY = e.pageY - (e.target as HTMLElement).offsetTop;

    this.mouseDown = true;
    this.ctx!.beginPath();
    this.ctx!.save();
    this.ctx!.moveTo(this.startX, this.startY);
  }

  mouseMoveHandler(e: MouseEvent) {
    const currentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    const currentY = e.pageY - (e.target as HTMLElement).offsetTop;

    if (this.mouseDown) {
      this.draw(currentX, currentY);
    }
  }

  draw(x: number, y: number) {
    this.ctx!.lineTo(x, y);
    this.ctx!.strokeStyle = "white";
    this.ctx!.stroke();
  }
}
