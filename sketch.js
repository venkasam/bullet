
var thickness,speed,weight,ra,r,damage;


function setup() {
  createCanvas(1200,400);
  
 thickness=random(20,90)
 speed=random(223,321)
 weight=random(30,52)
 ra=createSprite(1100,200,thickness,600)
 r=createSprite(200,200,40,10)
damage=(speed*weight*speed*.5)/thickness*thickness*thickness;
 
}

function draw() {
  background("purple");  
r.velocityX=speed
r.collide(ra)
if (r.collide(ra)&&damage>=10){
ra.shapeColor="red"
}
else  {
  ra.shapeColor="green"
}
if (r.collide(ra)&&damage<=9.999){
  ra.shapeColor="green"
  }

drawSprites();
}