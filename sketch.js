
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2, 660, width, 10);

	paper1=new Paper(200,610,30);
	side1=new Bin(600,590,60,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teel");

 

 ground.display();

 paper1.display();
side1.display();
drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75})
	}
}
