function cheese(){
  this.x=Math.floor(Math.random()*w);
  this.y=50;
  this.width=100;
  this.height=100;
  this.count=0;
  this.show=function(){
    fill(color("green"));
    ellipse(this.x,this.y,this.width,this.height);
  }
}
