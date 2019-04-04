function platform(){
  this.x=500;
  this.y=500;
  this.width=100;
  this.height=100;
  this.show=function(){
    fill(color("green"));
    rect(this.x,this.y,this.width,this.height);
  }
}