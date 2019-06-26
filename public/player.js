class Player{
    constructor(){
        this.width=20;
        this.height=60;
        this.pos=createVector(width/2,height-this.height)
        this.bombs=[];
        this.speed=3.5;
        this.missed=0;
        this.dead=false;
    }
    show(){
        stroke(255);
        fill(255);
        rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    moveRight(){
        this.pos.x+=this.speed;
    }
    moveLeft(){
        this.pos.x-=this.speed;
    }
    moveUp(){
        this.pos.y-=this.speed;
    }
    moveDown(){
        this.pos.y+=this.speed;
        if(this.pos.y+this.height>height){
            this.pos.y=height-this.height;
        }
    }
    updateBombs(){
        for(var i in this.bombs){
            this.bombs[i].update();    
        }
    }
    showBombs(){
        for(var i in this.bombs){
            this.bombs[i].show();    
        }
    }
    checkBombsInvadersHit(invaders){
        for(var i in this.bombs){
            for(var j=invaders.length-1;j>=0;j--){
                if (collideRectRect(this.bombs[i].pos.x,this.bombs[i].pos.y,this.bombs[i].width,this.bombs[i].height,invaders[j].pos.x,invaders[j].pos.y,invaders[j].width,invaders[j].height)){
                    invaders.splice(j,1);
                }                
            }
        }
    }
    checkPlayerInvadersHit(invaders){
        for(var i in invaders){
            if(collideRectRect(this.pos.x,this.pos.y,this.width,this.height,invaders[i].pos.x,invaders[i].pos.y,invaders[i].width,invaders[i].height)){
                this.dead=true;    
            }
        }
    }
    shoot(){
        var bomb=new Bomb(this.pos.x,this.pos.y);
        bomb.applyForce(-7);
        this.bombs.push(bomb);
    }
}