var box;



function setup() {
  createCanvas(400,400);
  box=createSprite(269,200,100,10);
}

function draw() 
{
  background("#F21717");
  box.x=World.mouseX;

  if(keyIsDown(UP_ARROW)){
    box.position.x=box.position.x+5;
  }
drawSprites();
}




