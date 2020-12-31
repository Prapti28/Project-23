var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var block1, block2, block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.visible = true;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	block1Sprite=createSprite(380, 650, 200, 20);
	block1Sprite.shapeColor="red"
	
	block2Sprite=createSprite(270,610,20,100);
	block2Sprite.shapeColor="red"

	block3Sprite=createSprite(490,610,20,100);
	block3Sprite.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //Create a box
	  block1 = Bodies.rectangle(380, 650, 200, 20, {isStatic:true});
	  World.add(world, block1);
	  
	  block2 = Bodies.rectangle(270, 610, 20, 100, {isStatic:true});
      World.add(world, block2);

	  block3 = Bodies.rectangle(490, 610, 20, 100, {isStatic:true});
      World.add(world, block3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 
  
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Body.setStatic(packageBody, false);
   return true 
}
return false;
}
