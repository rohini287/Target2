const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var scoreX=0
var scoreY=0;
var shot

function preload(){
  bg=loadImage("images/bg.jpeg");
}



function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  dart=new Dart(600,300,80);
  missile=new Missile(1000,200,100,70);

  sling=new constraint({x:1000,y:200},missile.body);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  dart.display();
  missile.display();
  if (shot){
    shot.display();
  }
 // drawSprites();
}

function mouseDragged(){
   Matter.Body.setPosition(missile.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
    shot=new Shot(missile.body,{x:random(600,680),y:random(200,280)});
    console.log(Math.round(missile.body.position.x))
    console.log(Math.round(missile.body.position.y));
     scoreX=Math.round(missile.body.position.x)
    scoreY=Math.round(missile.body.position.y);
   
    //shot.fly();
    Matter.Body.setPosition(missile.body,{x:scoreX,y:scoreY});
   // Matter.Body.setStatic(missile.body,true)
    
};