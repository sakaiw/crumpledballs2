class Paper {
    constructor(x,y,radius) 
    {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.radius/2, options)
        World.add(myWorld, this.body);

    } 
    display() {
        var paperPosition = this.body.position;
        push()
        translate(paperPosition.x, paperPosition.y);
        imageMode(CENTER)
        strokeWeight(3);
        fill("cadetblue")
        image(this.image,0,0, this.radius, this.radius);
        pop()
    }
}