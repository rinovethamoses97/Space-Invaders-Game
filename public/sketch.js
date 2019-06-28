var player;
var invaders=[];
var key=0;
var shootSound;
var invaderRate=200;
var productionRate=3;//ranges from 1 to 10 for the current canvas width
function preload(){
    shootSound=loadSound("./gunsound.mp3");
}
function setup(){
    createCanvas(600,600);
    player=new Player();
}
function draw(){
    background(0);
    if(frameCount%invaderRate==0){
        for(var i=0;i<productionRate;i++){
            var invader=new Invader(random((i)*(width/productionRate),(i+1)*(width/productionRate)-50,0));
            invader.appleForce(2);
            this.invaders.push(invader);
            invaderRate-=1;
        }
        // productionRate+=0.2;
    }
    player.show();
    player.updateBombs();
    player.checkBombsInvadersHit(invaders);
    player.checkPlayerInvadersHit(invaders);
    player.showBombs();
    for(var i=invaders.length-1;i>=0;i--){
        invaders[i].update();
        invaders[i].show();
        if(invaders[i].pos.y+invaders[i].height>=height){
            invaders.splice(i,1);
            player.missed++;
            if(player.missed>=30){
                player.dead=true;
            }
        }
    }
    stroke(255);
    noFill();
    text("Missed = "+player.missed,10,20);
    if(keyIsDown(39)){
        player.moveRight();
    }
    if(keyIsDown(37)){
        player.moveLeft();
    }
    if(keyIsDown(38)){
        player.moveUp();
    }
    if(keyIsDown(40)){
        player.moveDown();
    }
    if(player.dead){
        console.log("Game Over!");
        noLoop();
    }
}
function keyPressed(){
    if(keyCode==32){
        shootSound.play();
        player.shoot()
    }
}