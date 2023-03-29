import Tool from "./Tool";

export default class Rectangle extends Tool {
  mouseDown: boolean;

  startX: number;

  startY: number;

  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.startX = 0;
    this.startY = 0;
    this.saved = "";
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
    this.startX = e.pageX - (e.target as HTMLElement).offsetLeft;
    this.startY = e.pageY - (e.target as HTMLElement).offsetTop;
    this.saved = this.canvas.toDataURL();

    this.mouseDown = true;
    this.ctx!.beginPath();
  }

  mouseMoveHandler(e: MouseEvent) {
    const currentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    const currentY = e.pageY - (e.target as HTMLElement).offsetTop;
    const width = currentX - this.startX;
    const height = currentY - this.startY;

    if (this.mouseDown) {
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x: number, y: number, w: number, h: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx!.beginPath();
      this.ctx!.rect(x, y, w, h);
      this.ctx!.fill();
      this.ctx!.stroke();
    };
  }
}
