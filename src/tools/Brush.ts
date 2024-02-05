import Tool from "./Tool";

export default class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
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
  }

  mouseDownHandler(e: MouseEvent) {
    const startX = e.pageX - (e.target as HTMLElement).offsetLeft;
    const startY = e.pageY - (e.target as HTMLElement).offsetTop;

    this.mouseDown = true;
    this.ctx!.beginPath();
    this.ctx!.moveTo(startX, startY);
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
    this.ctx!.stroke();
  }
}
