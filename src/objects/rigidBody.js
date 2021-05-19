class RigidBody {
  constructor(x, y, mass, color) {
    this.position = {
      x: x,
      y: y,
    };
    this.force = {
      x: 200,
      y: 200,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.mass = mass;
    this.centerOfMass = {
      x: this.x - this.mass / 2,
      y: this.y - this.mass / 2,
    };
    this.rotation = 0;
    this.collision = false;
    this.color = color;
    console.log(color);
  }
  checkCollisions(canvas, rigidBodies, index) {
    //Out of bounds
    if (this.position.y + this.mass / 2 >= canvas.height) {
      this.position.y = canvas.height - this.mass/2;
      this.velocity.y *= -1;
    }
    if (this.position.y - this.mass / 2 <= 0) {
      this.position.y = this.mass/2;
      this.velocity.y *= -1;
    }
    if (this.position.x - this.mass / 2 <= 0) {
      this.position.x = this.mass/2;
      this.velocity.x *= -1;
    }
    if (this.position.x + this.mass / 2 >= canvas.width) {
      this.position.x = canvas.width - this.mass/2;
      this.velocity.x *= -1;
    }

    //Rigid Bodies
    for (let i = 0; i < rigidBodies.length; i++) {
      if (i === index) continue;
      if (
        this.position.x + this.mass/2 >
          rigidBodies[i].position.x-rigidBodies[i].mass/2 &&
        this.position.x - this.mass / 2 <
          rigidBodies[i].position.x + rigidBodies[i].mass/2
      ) {
        if (
          this.position.y + this.mass/2 >
            rigidBodies[i].position.y-rigidBodies[i].mass/2 &&
          this.position.y - this.mass / 2 <
            rigidBodies[i].position.y + rigidBodies[i].mass/2
        ) {
          this.collision = true;
        }
      }
    }
  }
  update(GRAVITY, canvas, rigidBodies, index) {
    this.collision = false;
    this.velocity.x += this.force.x / this.mass;
    this.velocity.y += this.force.y / this.mass;

    this.force = {
      x: 0,
      y: 0,
    };

    this.velocity.y += GRAVITY;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.checkCollisions(canvas, rigidBodies, index);
  }
  draw(ctx) {
    
    if(this.collision) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(
        this.position.x - this.mass / 2 - 2,
        this.position.y - this.mass / 2 - 2,
        this.mass + 4,
        this.mass + 4
      );
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x - this.mass / 2,
      this.position.y - this.mass / 2,
      this.mass,
      this.mass
    );
  }
}
export default RigidBody;
