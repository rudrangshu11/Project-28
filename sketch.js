
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player;
var floor;
var rock;
var rope, tree;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Ground();
	player = new Boy(180, 510, 200, 300)
	rock = new Stone(80, 445);
	rope = new Chain(rock.body, {x: 120, y:445});
	tree = new Tree(800, 350, 600, 500)
	mango1 = new Mango(700, 250)
	mango2 = new Mango(900, 300)
	mango3 = new Mango(600, 350);
	mango4 = new Mango(1000, 220);
	mango5 = new Mango(800, 200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  floor.display();
  player.display();
  rock.display();
  rope.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


