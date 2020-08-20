
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var roof1;
var rope1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
  bob1 = new bob(200,300,10);
  bob2 = new bob(210,300,10);
  bob3 = new bob(220,300,10);
  bob4 = new bob(230,300,10);
  bob5 = new bob(240,300,10);
  roof1 = new roof(200,200,100,20);
  rope1 = new rope(bob1.body,roof1.body,+bob1*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   roof1.display();
   rope1.display();
   drawSprites();
 
}



