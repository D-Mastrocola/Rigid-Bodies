class RigidBody {
  constructor(x, y, mass, color) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.rotation = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.color = color
  }
  checkCollisions(canvas) {
      //Out of bounds
      if(this.y + this.mass > canvas.height) {
          this.y = canvas.height - this.mass;
          this.ySpeed = 0;
      }
  }
  update(GRAVITY, canvas) {
    this.ySpeed += GRAVITY;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.checkCollisions(canvas);
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.mass, this.mass);
  }
}
export default RigidBody;
