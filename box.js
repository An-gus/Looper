class Box{
  
  constructor(theta,inv=null){
    if (inv){
      this.inv = 1
    }else{
      this.inv = 0
    }
    let t = random([0,1,2])
    this.act = 1
    this.theta = theta
    let x = (125+20*t) * cos(this.theta)
    let y = (125+20*t) * sin(this.theta)
    this.pos=createVector(x,y)
    
  }
  
  draw(){
    push()
    translate(this.pos.x,this.pos.y)
    fill(255)
    stroke(0)
    strokeWeight(1)
    rectMode(CENTER)
    rotate(this.theta)
    rect(0,0,20)
    strokeWeight(10)
    stroke(255,0,0)
    point(0,0)
    //line(-10,-10,10,10)
    //line(-10,10,10,-10)
    pop()
    
  }
  
  col(x,y){
    if(x >= this.pos.x-10 && x <= this.pos.x+10 && y >= this.pos.y-10 && y <= this.pos.y+10 && this.inv==0){
      return 1
    }
  }
  
  near(theta){
    if (this.theta >= theta-0.1 && this.theta <= theta+0.1 && this.act == 1){
      this.act = 0
      return 1
    }
  }
  
}