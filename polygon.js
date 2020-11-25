class poly{
    constructor(x,y,r){
        var options={
        
            restitution:0.3,
            friction:1.5,
            density:1.2

        }
      this.image=loadImage("images.png")
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    
    }
    display(){

        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
         
       
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}