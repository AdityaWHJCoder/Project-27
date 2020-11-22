
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObjectImg;
var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roofObject, roofImg;
var bobDiameter;


function preload(){
	bobObjectImg = loadImage("shinyBall.png");
	roofImg = loadImage("rod.png");	
	
}

function setup() {
	var canvas = createCanvas(800, 750);

    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	//Create the Bodies Here.

	/*roof = createSprite(400, 200, 252, 30);
	roof.addImage(roofImg);
	roof.scale = 0.5;
	roofImg.width = 551;
	roofImg.height = 70;
	World.add(world, roof);*/

	roofObject = new Roof(width / 2, height / 4, width / 7, 20)

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);

	bobObject1 = new Bob(300, 450, 50, 50);
	bobObject2 = new Bob(350, 450, 50, 50);
	bobObject3 = new Bob(400, 450, 50, 50);
	bobObject4 = new Bob(450, 450, 50, 50);
	bobObject5 = new Bob(500, 450, 50, 50);

	ground = new Ground(625, 743, 1250, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background("lightblue");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ground.display();
  
  rope1.display()
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
