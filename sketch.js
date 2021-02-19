
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 200, 400, 40);
	bob1 = new Bob(250, 400, 75);
	bob2 = new Bob(325, 400, 75);
	bob3 = new Bob(400, 400, 75);
	bob4 = new Bob(475, 400, 75);
	bob5 = new Bob(550, 400, 75);

	rope1 = new Rope();
	rope2 = new Rope();
	rope3 = new Rope();
	rope4 = new Rope();
	rope5 = new Rope();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



