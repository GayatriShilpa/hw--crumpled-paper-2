class Bin{
    constructor(x,y,width,height){
       this.bin=Bodies.rectangle(x,y,width,height,{isStatic:true});
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.image=loadImage("dustbingreen.png")
       World.add(world,this.bin);
   }   
   
     
   display(){
      
     imageMode(CENTER);
       image(this.image,this.bin.position.x,this.bin.position.y,150,150);
   }
   }