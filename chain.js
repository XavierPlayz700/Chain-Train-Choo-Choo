class ChainLol {

    constructor (bodyA, bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.5,
            length : 25
        }
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display () {
        var pointyA = this.chain.bodyA.position;
        var pointyB = this.chain.bodyB.position;

        push();
        strokeWeight(4);
        stroke("cyan");
        line(pointyA.x, pointyA.y, pointyB.x, pointyB.y);
        pop();
    }

}