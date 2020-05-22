const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string,ball,ground;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  var ground_options={
    isStatic : true
  }

  ground = Bodies.rectangle(150,300,200,20,ground_options)
  World.add(world,ground);

  ball  = Bodies.circle(150,270,10);
  World.add(world,ball);

  string = new SlingShot(this.ball,{x:150,y:300});
}


function draw() {
  background(0); 
  // Engine.update(engine);

  strokeWeight(2);
  stroke("white");
  fill("red");
  rectMode(CENTER);
  {{for(var x = 460; x < 541; x = x + 20){
    rect(x,260,15,30);
  }
  fill("blue");
  for(var x = 470; x < 531; x = x + 20){
    rect(x,225,15,30);
  }
  fill("yellow");
  for(var x = 480; x < 521; x = x + 20){
    rect(x,190,15,30);
  }
  fill("green");
  for(var x = 490; x < 511; x = x + 20){
    rect(x,155,15,30);
  }
  fill("pink");
  rect(500,120,15,30);
  }
  // if(this.rect.speed < 3){
  //   rect.display();
  // }
  // else{
  //   World.remove(world, this.rect); 
  //   push();
  //   this.Visiblity = this.Visiblity - 5;
  //   tint(255,this.Visiblity);
  //   rect(this.body.position.x, this.body.position.y, 15, 30);
  //   pop();
  //  }
  }


  fill(0);
  text("Shoot the ball to hit the pyramid",200,20);
  text("Click the Space Key to make the constrainted ball follow the mouse",150,50);
  
  stroke("black");
  fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);


  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);

  // strokeWeight(2);
  // stroke("white");
  // line(ball.position.x,ball.position.y,ground.position.x,ground.position.y);
  
  string.display();
}
function mouseDragged(){
  // Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
  ball.position.y = mouseY;
  ball.position.x = mouseX;
}

function mouseReleased(){
  string.fly();
}

function keyPressed(){
  console.log("hello");
  if(keyCode === 32){
    //Matter.Body.setPosition(ball.body, {x : 200, y : 50});
    console.log("hi");
    string.attach(ball.body);
  }
}