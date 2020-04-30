class Ball{
    constructor(x,y,width,height){
        var options={
            restitution:2.0,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        rect(pos.x,pos.y,this.body.width,this.body.height);
      //  this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        fill("pink");
    }
}