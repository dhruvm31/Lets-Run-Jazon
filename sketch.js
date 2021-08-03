var runner_moving,runner;
var bomb, coin, energydrink;
var path,pathImg, power,left_boundary,right_boundary;

function preload(){
  runner_moving = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadAnimation("path.png");

}

function setup(){
  createCanvas(400,400);
  //moving background
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY=4;
  //creating runner animation
  runner = createSprite(200,300,20,170)
  runner.addAnimation("running",runner_moving);
  runner.scale = 0.05;

  //creating left boundary
  left_boundary = createSprite (0,300,100,600);
  left_boundary.visible = false
  //creating right boundary
  right_boundary = createSprite (390,0,80,600);
  right_boundary.visible = false
 }

function draw() {
  background(0);
   path.velocityY=4;
  
  if(keyDown("right")){
    runner.velocityX = 5
  }
  if(keyDown("left")){
    runner.velocityX = -5
  }
  if (path.y > 400){
     path.y=path.height/2;
     
   }
  edges = createEdgeSprites();
  runner.collide(edges[3])  
  runner.collide(left_boundary)
  runner.collide(right_boundary);
  drawSprites();
}
