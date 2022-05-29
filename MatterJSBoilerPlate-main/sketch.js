
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftSide;
var rightSide;
var floorr;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={ 
		isStatic:false, 
		restitution:0.3, 
		friction:0, 
		density:1.2 
	} 
	ball = Bodies.circle(260,100,20,ball_options); 
	World.add(world,ball); 
	leftSide = new Shaper(1100,600,20,200); 
	rightSide = new Shaper(1350,600,20,200);

	floorr = new Shaper(400,685,2000,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30); 
  leftSide.display(); 
  rightSide.display();
  floorr.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,
			{x:85,y:-85}); 
		} 
	}


