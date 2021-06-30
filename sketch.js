const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var divisions = [];
var divHeight = 170;
var particle = [];
var plinko = [];

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  
  ground = new Ground(240,790,480,20);

  for (var k = 0; k <=innerWidth; k=k+80){
    divisions.push(new Division(k, height-divHeight/2,10, divHeight));
  }

  for (var j = 40; j <=width; j=j+50);{
    plinko.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50);{  
    plinko.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width; j=j+50);{
    plinko.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-10; j=j+50);{
    plinko.push(new Plinko(j,275));
  }
  
}

function draw() {
  background("black");  

  for(var v = 0; v < divisions.length; v++){
    divisions[v].display();
  }

  if(frameCount %60 === 0){
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for (var b = 0; b<particles.length; b++);
  {
    particle[b].display();
  }

  for (var c = 0; c<plinko.length; c++);
  {
    plinko[b].display();
  }

  ground.display();

  drawSprites();
}