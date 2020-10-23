
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1,rope2,rope3,rope4,rope5;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Bob1 = new Bob(100,600,10);
	rope1 = new rope(Bob1, {x:100, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Bob1.display();
  rope1.display();

  drawSprites();
 
}



