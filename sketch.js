var wall,thickness;

var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 40, 60);
  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  thickness = random(22,83);
  speed = (223,321);
  weight=random(30,52);
  bullet.shapeColor='black';
}

function draw() {
  background(255,255,255); 
 bullet.velocityX=8;
 if(hasCollided(bullet,wall)){
 bullet.velocityX=0;
 var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
 if(damage>10)
{
wall.shapeColor=color(225,0,0);
}
if (damage<10){

  wall.shapeColor=color(0,225,0);
}
 }
  drawSprites();
}
function hasCollided(lBullet, lwall){
  bulletRightEdge=lBullet.x + lBullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
  return false;
}