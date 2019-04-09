function cheese(){
  this.x=50;
  this.y=50;
  this.width=100;
  this.height=100;
  this.show=function(){
    fill(color("green"));
    rect(this.x,this.y,this.width,this.height);
  }
}