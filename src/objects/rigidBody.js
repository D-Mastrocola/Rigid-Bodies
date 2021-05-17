class RigidBody {
  constructor(x, y, mass, color) {
    this.position = {
      x: x,
      y: y,
    };
    this.force = {
      x: 200,
      y: 200
    }
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.mass = mass;
    this.centerOfMass = {
      x: this.x - this.mass/2,
      y: this.y - this.mass/2,
    }
    this.rotation = 0;

    this.color = color;
  }
  checkCollisions(canvas) {
    //Out of bounds
    if (this.position.y + this.mass > canvas.height) {
      this.position.y = canvas.height - this.mass;
      this.velocity.y *= -1;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -1;
    }
    if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x *= -1;
    }
    if (this.position.x + this.mass > canvas.width) {
      this.position.x = canvas.width - this.mass;
      this.velocity.x *= -1;
    }
  }
  update(GRAVITY, canvas) {
    this.velocity.x += this.force.x / this.mass;
    this.velocity.y += this.force.y / this.mass;

    this.force = {
      x: 0,
      y: 0
    };

    this.velocity.y += GRAVITY;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.checkCollisions(canvas);
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.mass, this.mass);
  }
}
export default RigidBody;
