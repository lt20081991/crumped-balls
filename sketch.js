
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cbl;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   cbl= new cb;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 cbl.display();
}


