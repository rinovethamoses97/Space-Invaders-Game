class Bomb{
    constructor(x_,y_){
        this.pos=createVector(x_+15,y_)
        this.velocity=createVector(0,0);
        this.acceleration=createVector(0,0);
        this.width=10;
        this.height=30;
    }
    show(){
        image(bulletImage,this.pos.x-20,this.pos.y,this.width+40,this.height);
        // stroke(255);
        // fill(255);
        // rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    update(){
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration=createVector(0,0);
    }
    applyForce(force){
        this.acceleration.y=force;
    }
}