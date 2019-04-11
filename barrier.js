//barrier that starts off the screen
//barrier that has a randomly y position
//barrier comes flying from right to left
//this is going to be the cat
function barrier(){
 
  this.x= w+100;
  this.y= Math.floor(Math.random()*h);
  this.leftPull=0.4;
  this.velocity=5;
  this.width=100;
  this.height=100;
 

  this.show=function(){
    fill(color("orange"));
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