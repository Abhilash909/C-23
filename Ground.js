class Ground {

constructor(x,y,width,height){

var square = {

    isStatic:true 
}
this.body=Bodies.rectangle(x,y,width,height,square);
this.width=width
this.height=height 
World.add(world,this.body)

}

display(){

    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height)
    


}










}

