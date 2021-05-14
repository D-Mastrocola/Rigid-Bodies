class RigidBody {
  constructor(x, y, mass, color, move) {
    this.position = {
      x: x,
      y: y,
    };
    this.force = {
      x: 0,
      y: 0
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

    this.moveRight = move;
  }
  checkCollisions(canvas) {
    //Out of bounds
    if (this.position.y + this.mass > canvas.height) {
      this.position.y = canvas.height - this.mass;
      this.velocity.y = 0;
    }
  }
  update(GRAVITY, canvas) {
    this.force = {x: 0, y: this.mass * GRAVITY}
    if(this.moveRight) this.force.x = 30;
    
    this.velocity = {
      x: this.force.x / this.mass,
      y: this.force.y / this.mass
    }
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
