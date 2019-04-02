function platform(){
  this.x=500;
  this.y=500;
  this.width=50;
  this.height=50;
  this.show=function(){
    fill(color("green"));
    rect(this.x,this.y,this.width,this.height);
  }
}