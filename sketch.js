var                                               ball,ballimg,paddle,paddleimg,leftEdge,topEdge,bottomEdge,count;

function preload() {
  
  ballimg=loadImage("ball.png")
  paddleimg=loadImage("paddle.png")
  
}
function setup() {
  
  createCanvas(400, 400);
  
  ball=createSprite(20,200,2,2);
  ball.addImage("ball",ballimg);
  
  paddle=createSprite(380,200,2,2);
  paddle.addImage("paddle",paddleimg);

  leftEdge=createSprite(0,200,10,400);
  bottomEdge=createSprite(200,0,400,10);
  topEdge=createSprite(200,400,400,10);
  
  count=0;
  
   ball.velocityY=9
   ball.velocityX=9;
}

function draw() {
  background(205,153,0);
  
  ball.bounceOff(leftEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(topEdge);
 
  
  fill(0)
  text("Score: "+count,200,100);
  
  if(ball.bounceOff(paddle)) {
   count=count+5; 
  }
  
  if(ball.y>=400||ball.y<=0||ball.x>=400||ball.x<=0){
    ball.y=random(100,300);
    ball.x=random(50,350);
    count=count-2;
  }
  
  paddle.bounceOff(leftEdge);
  paddle.bounceOff(bottomEdge);
  paddle.bounceOff(topEdge);
  
  leftEdge.visible=false;
  bottomEdge.visible=false;
  topEdge.visible=false;
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=4;
  }
  
  randomVelocity();
  
  drawSprites();
  
}

function randomVelocity()
{
 if(ball.y>=400||ball.y<=0||ball.x>=400||ball.x<=0){
 ball.velocityY=random(1,12);
 ball.velocityX=random(1,13);

 }
}