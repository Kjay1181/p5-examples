//barrier that starts off the screen
//barrier that has a randomly y position
//barrier comes flying from right to left
function barrier(){
 
  this.x= w+100;
  this.y= Math.floor(Math.random()*h);
  this.leftPull=0.1;
  this.velocity=5;
  this.width=60;
  this.height=60;

  this.show=function(){
    fill(color("orange"));
    rect(this.x,this.y,this.width,this.height);
  }

  this.update=function(){//makes the ball fall down
  this.velocity+= this.leftPull;
  this.x-=this.velocity;
 if (barrier.x === 0-100){// fix this line of code to  make the barrier continuesley run
   barrier.x === w+ barrier.width;
 }
  }
      

}
