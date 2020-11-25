class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
         
    }
    attach(bodyA){ this.sling.bodyA=bodyA; }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            fill(255,15,100)
            strokeWeight(3);
           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           }
    
            }
        
    }