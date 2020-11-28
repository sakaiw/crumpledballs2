const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustBin1, dustBin2, dustBin3,paper;
var myEngine,myWorld;
var dustBinimg,dustBincan;

function preload()
{
	dustBinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000,400);

	myEngine = Engine.create();
	myWorld = myEngine.world;

  ground = new Ground(600,height,1200,20);
  
	dustBin1 = new dustBins(800,390,100,10);
	dustBin2 = new dustBins(750,380,10,40);
  dustBin3 = new dustBins(850,380,10,200);
  
  paper = new Paper(200,300,70);
  
	dustBin =createSprite(800,316,10,10);
	dustBin.scale=0.5;
	dustBin.addImage(dustBinimg);
 
	Engine.run(myEngine);
 
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(myEngine);

  paper.display();

  dustBin1.display();
  dustBin2.display();
  dustBin3.display();

  ground.display();  

  dustBin.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:240,y:-170})
	}	
}