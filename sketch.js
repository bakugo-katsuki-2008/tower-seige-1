const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block01 = new Block(765,180,30,40);
  block02 = new Block(735,180,30,40);
  block03 = new Block(705,180,30,40);
  block04 = new Block(675,180,30,40);
  block05 = new Block(645,180,30,40);


  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block06 = new Block(735,140,30,40);
  block07 = new Block(705,140,30,40);
  block08 = new Block(675,140,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block09 = new Block(705,100,30,40);

  //top
  block16 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);

  World.add(world,polygon)

  
  //this.polygon = polygon


  slingshot = new SlingShot(polygon, {x:100, y:200});


  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);

  slingshot.display();
  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block06.display();
  block07.display();
  block08.display();


  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  block09.display();

  fill("grey");
  block16.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


