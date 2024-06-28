import Player from "@/404/game/Player";

const canvas = document.querySelector("canvas");

if (canvas !== null) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const c = canvas?.getContext("2d");

  if (c !== null) {
    const player = new Player(canvas);

    player.draw(c);
  }

  function animate() {
    requestAnimationFrame(animate);
  }

  animate();
}
