import Tool from "./Tool";

export default class PolyAngle extends Tool {
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
  }

  mouseMoveHandler(e: MouseEvent) {
    const currentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    const currentY = e.pageY - (e.target as HTMLElement).offsetTop;
    const width = currentX - this.startX;
    const height = currentY - this.startY;
    const radius = Math.sqrt(width ** 2 + height ** 2);

    if (this.mouseDown) {
      this.draw(radius);
    }
  }

  draw(r: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = async () => {
      this.ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);

      const rot = Math.PI / 6;
      this.ctx!.save();
      this.ctx!.translate(this.startX, this.startY);
      this.ctx!.beginPath();
      this.ctx!.rotate(-rot);
      this.ctx!.moveTo(0, 0 - r);
      for (let key = 0; key < 6; key += 1) {
        this.ctx!.rotate(rot * 2);
        this.ctx!.lineTo(0, 0 - r);
      }
      this.ctx!.restore();
      this.ctx!.closePath();
      this.ctx!.fill();
      this.ctx!.stroke();
    };
  }
}
