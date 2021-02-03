
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

Constraint = Matter. Constraint

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,50, width/8,50);

	bobObject1 = new Bob(260,460,90)
	bobObject2 = new Bob(330,460,90)
	bobObject3 = new Bob(400,460,90)
	bobObject4 = new Bob(470,460,90)
	bobObject5 = new Bob(540,460,90)

	rope1 = new Rope(bobObject1.body,roof.body,-40*2, 0)
	rope2 = new Rope(bobObject2.body,roof.body,-40*1, 0)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	rope4 = new Rope(bobObject4.body,roof.body,40*1, 0)
	rope5 = new Rope(bobObject5.body,roof.body,40*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("yellow");
	
	Engine.update(engine);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();
}

function keyPressed() {
	if (keyCode ===  UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


