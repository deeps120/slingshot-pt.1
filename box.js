class Box{
    constructor(x,y,width,height){
        var options={
            restitution:2.0,
            friction:0.8,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        fill("pink");
        
    }
}