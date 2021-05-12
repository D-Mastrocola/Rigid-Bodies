import RigidBody from "./objects/rigidBody.js";

const GRAVITY = 0.5;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rigidBodies = [];

console.log(ctx);

let body1 = new RigidBody(200, 0, 50, "#ff0000");
let body2 = new RigidBody(200, 100, 50, "#ff00ff");

rigidBodies.push(body1);
rigidBodies.push(body2);

let init = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.requestAnimationFrame(gameLoop);
};

//---------------------------------
let secondsPassed;
let oldTimeStamp;
let fps;

let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rigidBodies.length; i++) {
    rigidBodies[i].draw(ctx);
  }
};

let update = () => {
  for (let i = 0; i < rigidBodies.length; i++) {
    rigidBodies[i].update(GRAVITY, canvas);
  }
  draw();
};
function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  // Calculate fps
  fps = Math.round(1 / secondsPassed);
  // Draw number to the screen

  // Perform the drawing operation
  update(timeStamp);

  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}
init();
