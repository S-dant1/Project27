class Bob{
    constructor(x, y, radius){


    var options_b= {
        isStatic: false,
        restitution: 1.2,
        friction: 0.5,
        density: 1.2

    }
       this.body = Bodies. circle(x, y, radius, options_b);
       this.radius = radius;
       World.add(world, this.body);



    }
display(){

    var pos = this.body.position;
    push ();

    fill("blue");
    ellipseMode(RADIANS);
    ellipse(pos.x, pos.y, this.radius*2);

    pop ();
}


}