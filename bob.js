class Bob {

    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r);
        World.add(world,this.body)

    }

    display(){
        fill('pink');
        var pos = this.body.position;
        circle(pos.x,pos.y,this.r)
    }


}