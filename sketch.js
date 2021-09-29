var Ball

function setup(){

createCanvas(500,500);

Ball.createSprite(250,250,20,20);

}

function draw(){

background("blue");

if(keyDown(LEFT_ARROW)){

writePosition(-1,0);

}

else if(keyDown(RIGHT_ARROW)){

writePosition(1,0);

}

else if(keyDown(UP_ARROW)){

writePosition(0,-1);

}

else if(KeyDown(DOWN_ARROW)){

writePosition(0,1);

}

drawSprites();

}

function writePosition(x,y){

Ball.x=Ball.x + 10*x

Ball.y=Ball.y + 10*y

}