class bob {
    constructor(x, y,radius) {
      var options = {
        isStatec:false
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 15;
      this.height = 15;
      //this.body = loadImage("ball/ball.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(this.pos.x,this.pos.y,25);
      pop();
    }
  }