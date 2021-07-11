class SlingShot {
    constructor(a, b){
        var options = {
            bodyA: a,
            pointB: b,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = b
        this.co = Matter.Constraint.create(options);
        World.add(world, this.co);
    }

display(){
    if(this.co.bodyA){
        
        var pointA = this.co.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
}}

fly(){
    this.co.bodyA = null;
}

}