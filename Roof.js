class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world, this.body);

    }

    display(){
      var roofPosition = this.body.position;
      push();
      translate(roofPosition.x, roofPosition.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    };

  };
