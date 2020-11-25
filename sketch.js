const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var hexa;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var platform;
var pull;
var backgroundImg
function preload() {
  getBackgroundImage();
}
function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(330,235,30,40);
 
  box2=new Box(360,235,30,40);
 
  box3=new Box(390,235,30,40);
  
  box4=new Box(420,235,30,40);
 
  box5=new Box(450,235,30,40);
 
  box6=new Box(360,195,30,40);
  
  box7=new Box(390,195,30,40);
  
  box10=new Box(330,275,30,40);
 
  box11=new Box(360,275,30,40);

  box12=new Box(390,275,30,40);
  box13=new Box(420,275,30,40);
  box14=new Box(450,275,30,40);
  box15=new Box(480,275,30,40);
  box16=new Box(300,275,30,40);
  box8=new Box(420,195,30,40);
  box9=new Box(390,155,30,40);
  platform=new Ground(390,305,220,20);
  hexa=new poly(1000,200,50);
  pull=new Rope(hexa.body, {x:1000,y:200});
  Engine.run(engine)
  
}

function draw() {
  if(backgroundImg){
    background(backgroundImg)
}
  Engine.update(engine);
  textSize(25);
  fill("black")
  text("SCORE : "+score,350,50);
  text("Drag the hexagonal stone and release it to launch it towards the blocks.Press space to try again",300 ,700);
  fill("turquoise")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill(243, 176, 216)
  box6.display();
  box7.display();
  box8.display();
  fill("gold");
  box9.display();
  fill(230, 150, 13)
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  
  box14.display();
  box15.display();
  box16.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();



  platform.display();
  pull.display();
  hexa.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

pull.fly();



}
function keyPressed() {
  if(keyCode === 32){
Matter.Body.setPosition(hexa.body,{x:1000, y:200});
pull.attach(hexa.body);

 
 }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var resJSON = await response.json();
  console.log(resJSON.datetime);
  var datetime = resJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06&&hour<=18){
  bg="sky.jpg"
  }
  else{
      bg="night.png"
  }
  backgroundImg=loadImage(bg)
  console.log(hour);
}
