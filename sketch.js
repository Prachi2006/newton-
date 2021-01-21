
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject,ropeObject;




function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	bobObject1=new Bob(400,7000,40);
	bobObject2=new Bob(300,7000,40);
	bobObject3=new Bob(500,7000,40);
	bobObject4=new Bob(200,7000,40);
	bobObject5=new Bob(600,7000,40);
    roofObject=new roof(400,200,500,20);
    //ropeObject=new rope(bobObject1,bobObject2,bobObject3,bobObject4,bobObject5.body,{x:450,y:200})
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roofObject.display();
 //ropeObject.display();

  
  
 
}



