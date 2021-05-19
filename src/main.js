import RigidBody from "./objects/rigidBody.js";

const GRAVITY = 0 //9.81;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rigidBodies = [];

//let body1 = new RigidBody(0, canvas.height - 100, 70, "#ff0000");
//let body2 = new RigidBody(200, canvas.height - 100, 50, "#ff00ff");

let colors = ['#ff0000', '#ff9900', '#ffff00', '#99ff00', '#00ff00', '#00ff99', '#00ffff', "#0099ff", '#0000ff', "#9900ff", "#ff00ff"]





let init = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for(let i = 0; i < 5; i++) {
    let body = new RigidBody(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 200 + 50, colors[Math.round(Math.random()*10)])
    rigidBodies.push(body);
  }
  
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
    rigidBodies[i].update(GRAVITY, canvas, rigidBodies, i);
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
