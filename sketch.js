var box
function setup() {
  createCanvas(400,400);
  box=createSprite(30,45,20,21)
}


function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW)){
   background("pink")
  }
  if (keyDown(RIGHT_ARROW)){
    background("green")
    
  }
  if (keyDown(UP_ARROW)){
    background("yellow")
  }
  if (keyDown(DOWN_ARROW)){
    background("red")
  }
drawSprites()
}




