class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
            
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
 fly(){
     this.launcher.bodyA = null ;
 }
attach(body){
    this.launcher.bodyA = body;

    //Matter.Body.setPosition(bodyA,{x: 235 , y:400});
}
    display(){
        
         
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}