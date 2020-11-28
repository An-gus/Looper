class Player{

    constructor(){
      this.pos = createVector(125,0)
      this.theta = 0
      this.trck = 1
      this.speed = 0.015
    }
  
    track(trck){
      this.trck = trck
    }
  
    chngspeed(n,s){
      if (n==1){this.speed += 0.01*s}
      if (n==-1){this.speed += 0.01*s}
    }

    update(){
      if (this.theta >= TWO_PI){this.theta = 0}
      this.theta += this.speed
      this.pos.x = (125+20*this.trck) * cos(this.theta)
      this.pos.y = (125+20*this.trck) * sin(this.theta)
      
    }

    draw(){
      strokeWeight(1)
      stroke(0)
      fill(255)
      ellipse(this.pos.x,this.pos.y,10)
    }
}