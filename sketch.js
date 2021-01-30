const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;
var ball;
var edge1, edge2, edge3, edge4;
var gameState;
var form;

var level = 1;
var numberValueTwo = 2;
var numberValueThree = 3;

function preload(){
  
}

function setup(){
  var canvas = createCanvas(500,500);
  
  ball = createSprite(250,250,15,15); 
  topEdge = createSprite(250,0,500,15); 
  bottomEdge = createSprite(250,500,500,15);
  rightEdge = createSprite(500,250,15,500);
  leftEdge = createSprite(0,250,15,500);
  key1 = createSprite(300,300,8,8);

  wall1 = createSprite(25,50,50,10);
  wall2 = createSprite(150,50,100,10);
  wall3 = createSprite(325,50,50,10);
  wall4 = createSprite(475,50,50,10);
  wall5 = createSprite(250,50,10,100);
  wall6 = createSprite(150,100,200,10);
  wall7 = createSprite(100,100,10,100);
  wall8 = createSprite(200,125,10,50);
  wall9 = createSprite(300,100,10,100);
  wall10 = createSprite(350,100,10,100);
  wall11 = createSprite(400,100,100,10);
  wall12 = createSprite(400,25,10,50);
  wall13 = createSprite(25,150,50,10);
  wall14 = createSprite(275,150,50,10);
  wall15 = createSprite(475,150,50,10);
  wall16 = createSprite(150,175,10,50);
  wall17 = createSprite(250,175,10,50);
  wall18 = createSprite(400,175,10,50);
  wall19 = createSprite(450,175,10,50);
  wall20 = createSprite(250,200,300,10);
  wall21 = createSprite(50,250,10,100);
  wall22 = createSprite(100,325,10,250);
  wall23 = createSprite(400,250,200,10);
  wall24 = createSprite(300,225,10,50);
  wall25 = createSprite(175,250,50,10);
  wall26 = createSprite(25,300,50,10);
  wall27 = createSprite(200,275,10,50);
  wall28 = createSprite(150,300,100,10);

  engine = Engine.create();
  world = engine.world;

}

function draw(){
  background(0,128,128);

  form = new Form()
  form.display();
  
  ball.visible = false

  console.log(level);

  if(keyCode === 32){
    gameStateSwitch();
  } 

  if(keyDown(LEFT_ARROW)){
    changePosition(-5,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(5,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-5);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,5);
}

  if(level == 2) {
    form.hide();
    ball.shapeColor = "green"
    topEdge.shapeColor = "orange"
    bottomEdge.shapeColor = "orange"
    rightEdge.shapeColor = "orange"
    leftEdge.shapeColor = "orange"
    key1.shapeColor = "yellow"
    ball.visible = true

    if(ball.isTouching(topEdge)) {
      ball.collide(topEdge);
    }
    if(ball.isTouching(bottomEdge)) {
      ball.collide(bottomEdge);
    }
    if(ball.isTouching(rightEdge)) {
      ball.collide(rightEdge);
    }
    if(ball.isTouching(leftEdge)) {
      ball.collide(leftEdge);
    }
    if(ball.isTouching(key1)) {
      key1.x = ball.x + 1;
      key1.y = ball.y;
    }

  }

  Engine.update(engine);

  drawSprites();

}



function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function gameStateSwitch(){
  level = numberValueTwo;
}










