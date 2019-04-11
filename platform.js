// this is going to be the dog
function platform(){
  this.x=w+100;
  this.y=Math.floor(Math.random()*h);
  this.leftPull=0.4;
  this.velocity=5;
  this.width=100;
  this.height=100;
  this.show=function(){
    fill(color("green"));
    rect(this.x,this.y,this.width,this.height);
  }
  this.update=function(){//makes the ball fall down
  this.velocity+= this.leftPull;
  this.x-=this.velocity;
 if (this.x <0){
  
   this.velocity=0;
   this.x= w+100;
  this.y= Math.floor(Math.random()*h);
  
 }
  }
}
