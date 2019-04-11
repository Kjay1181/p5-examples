function cheese(){
  this.x=Math.floor(Math.random()*w);
  this.y=100;
  this.width=50;
  this.height=50;
  this.count=0;
  this.show=function(){
    fill(color("green"));
    ellipse(this.x,this.y,this.width,this.height);
  }
  
}
