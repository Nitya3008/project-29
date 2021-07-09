class Base{
    constructor(x,y,w,h,color,isStatic){
        let options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.color=color;
        World.add(world,this.body);
    }

    show(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
    }
}