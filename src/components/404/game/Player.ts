import { calcMidlePosition } from "@/404/game/helpers/position";
import type { Coords } from "@/404/game/interfaces/common";

export default class Player {
  position: Coords;
  speed: Coords;
  image: string;
  width: number;
  height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.width = 100;
    this.height = 100;
    this.position = {
      x: canvas.width / 2 - this.width / 2,
      y: canvas.height - this.height * 2,
    };
    this.speed = {
      x: 0,
      y: 0,
    };
    this.image = "";
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "red";
    context?.fillRect(
      this.position.x,
      this.position.y,
      this.height,
      this.width
    );
  }
}
