let w = 20
let mmsong
let plysong
let player
let playing = 0
let c1 = 240
let c2 = 120
let c3 = 0
let barr = []
let score = 0
let hscore = 0
let p13 = 1
let p45 = 1
let p75 = 1
let d = 0
let s = 0
let snd = 1
let clk
let die
let hs

function loaded(){
  mmsong.loop()
}

function setup() {
  textSize(20)
  textAlign(CENTER,CENTER)
  createCanvas(400, 400);
  ellipseMode(CENTER)
  mmsong = loadSound('MainMenu.mp3',loaded)
  clk = loadSound('select.wav')
  plysong = loadSound('playingTheme.mp3')
  die = loadSound('death.wav')
  hs = loadSound('hscore.wav')
}


function keyPressed(){
  userStartAudio();
  if (keyCode == 27){
      if (playing == 1 && snd == 1){mmsong.loop()}
      if (score>hscore && playing == 1){
        hscore = score
        if (snd==1){hs.play()}
      }else if (playing == 1){
        if (snd==1){die.play()}
      }else if(playing == 2){
        if (snd==1){clk.play()}
      }
      playing = 0
      if (plysong.isPlaying()){plysong.stop()}
    }
  
  if (playing == 1){
    if (keyCode === 49){player.trck = 0}
    if (keyCode === 50){player.trck = 1}
    if (keyCode === 51){player.trck = 2}
    if ((keyCode === LEFT_ARROW || keyCode == 65) && player.trck > 0){
      player.track(player.trck-1)
    }
    if ((keyCode === RIGHT_ARROW || keyCode == 68) && player.trck < 2){
      player.track(player.trck+1)
    }
  }
}

function mouseClicked(){
  userStartAudio();
  if (playing==0 && mouseX>=width/2-35 && mouseX <= width/2+35 && mouseY>=height/2-30 && mouseX <= height/2+30){
    
    if (mmsong.isPlaying()){mmsong.stop()}
    if (snd == 1){
      clk.play()
      plysong.loop()
    }


    barr = []
    for (var j = 0; j<4+1*(d);j++){
          barr[j] = new Box(j*TWO_PI/(4+1*(d)))
        }
  
    barr[0].pos.x=125
    barr[0].pos.y=0
    barr[0].inv = 1
    player = new Player()
    score = 0
    p13 = 1
    p45 = 1
    p75 = 1
    playing = 1
  }
  
  if (playing==0 && mouseX>=width-43 && mouseX <= width-17 && mouseY>=17 && mouseY <= 43){
      playing = 2
      if(snd==1){clk.play()}
    }
  
  //settings;
  if (playing==2){
    //diff
    if (mouseX>=width/2-30 && mouseX <= width/2-10 && mouseY>=70 && mouseY <= 90){d=0;if(snd==1){clk.play()}}
    if (mouseX>=width/2-10 && mouseX <= width/2+10 && mouseY>=70 && mouseY <= 90){d=1;if(snd==1){clk.play()}}
    if (mouseX>=width/2+10 && mouseX <= width/2+30 && mouseY>=70 && mouseY <= 90){d=2;if(snd==1){clk.play()}}
    
    //speed
    if (mouseX>=width/2-30 && mouseX <= width/2-10 && mouseY>=190 && mouseY <= 210){s=0;if(snd==1){clk.play()}}
    if (mouseX>=width/2-10 && mouseX <= width/2+10 && mouseY>=190 && mouseY <= 210){s=1;if(snd==1){clk.play()}}
    if (mouseX>=width/2+10 && mouseX <= width/2+30 && mouseY>=190 && mouseY <= 210){s=2;if(snd==1){clk.play()}}
  }
  
  //sound
  if (mouseX>=width/2-20 && mouseX <= width/2 && mouseY>=320 && mouseY <= 340){
    snd=0
    mmsong.stop()
  }
  if (mouseX>=width/2 && mouseX <= width/2+20 && mouseY>=320 && mouseY <= 340){
    if (snd!=1){mmsong.loop()}
    clk.play()
    snd=1
    
  }
  
  //quit
  if (mouseX>=5 && mouseX<=35 && mouseY>=10 && mouseY<=40){
    playing = 0
    if(snd==1){clk.play()}
  }
  
}

function draw() {

  
  background(45);
  translate(width/2,height/2)
  noFill()
  
  
  push()
  textSize(20)
  textAlign(LEFT,BOTTOM)
  fill(255)
  stroke(0)
  strokeWeight(1)
  text(hscore,-width/2+5,height/2)
  //textAlign(RIGHT,BOTTOM)
  //text(hscore,width/2-5,height/2)
  pop()
  
  push()
  colorMode(HSB)
  stroke(c1,100,100)
  strokeWeight(w)
  ellipse(0,0,250)

  stroke(c2,100,100)
  strokeWeight(w)
  ellipse(0,0,250+w+w)

  stroke(c3,100,100)
  strokeWeight(w)
  ellipse(0,0,250+w+w+w+w)
  pop()
  
  if (playing == 0){
    push()
    var ov = 0
    var st = 0
    
    if (mouseX>=width/2-35 && mouseX <= width/2+35 && mouseY>=height/2-30 && mouseY <= height/2+30){
      ov = 1
    }
    
    if (mouseX>=width-43 && mouseX <= width-17 && mouseY>=17 && mouseY <= 43){
      st = 1
    }

    
    textSize(20+5*ov)
    textAlign(CENTER,CENTER)
    fill(255)
    strokeWeight(1)
    stroke(0)
    text('Looper',0,-10)
    textSize(10+3*ov)
    fill(77+50*ov,246+9*ov,255)
    text('by Angus',0,10)
    //rect(0,0,70,60)
    pop()
    
    
    push()
    fill(255)
    strokeWeight(0)
    translate(width/2-30,30-height/2)
    ellipse(0,0,20+2*st)
    rectMode(CENTER)
    for (var t=0;t<7;t++){
      push()
      translate((11+st)*cos(t*TWO_PI/7),(11+st)*sin(t*TWO_PI/7))
      rotate(t*TWO_PI/7)
      rect(0,0,4+st)
      pop()
    }
    fill(45)
    ellipse(0,0,10+2*st)
    pop()
    //rect(width/2-30,30-height/2,25)
    
    
  }else if(playing == 1){
    if (mmsong.isPlaying()){mmsong.stop()}
    
    c1 += 1
    c2 += 1
    c3 += 1
    if (c1>= 360){c1 = 0}
    if (c2>= 360){c2 = 0}
    if (c3>= 360){c3 = 0}
    
    player.update()
    player.draw()
    
    
    for (var i=0; i < barr.length; i++){
      
      if (score == 13 && p13 == 1){
        barr = []
        if (snd==1){hs.play()}
        p13 = 0
        for (var k = 0; k<6+1*(d);k++){
          barr[k] = new Box(k*TWO_PI/(6+1*d))
        }
        barr[0].inv = 1
      
    }
      
    if (score == 45 && p45 == 1){
      if (snd==1){hs.play()}
      barr = []
      p45 = 0
      for (var a = 0; a<8+1*d;a++){
        barr[a] = new Box(a*TWO_PI/(8+1*d))
      }
      barr[0].inv = 1
    }
    
      
    if (score == 75 && p75 == 1){
      if (snd==1){hs.play()}
      p75 = 0
      barr = []
      for (var a = 0; a<10+1*d;a++){
        barr[a] = new Box(a*TWO_PI/(10+1*d))
      }
      barr[0].inv = 1      
    }
      
      
      if (barr[i].col(player.pos.x,player.pos.y)){
        
        player = new Player()
        playing = 0
        if (score>hscore){hscore = score}

        if(snd==1){
          if (hscore == score){
            hs.play()
          }else{
            die.play()
          }
        }

        if (snd == 1 && plysong.isPlaying()){mmsong.loop()}
        if (plysong.isPlaying()){plysong.stop()}        
      }
      
      barr[i].draw()

      
      if (barr[i].near(player.theta)){
        score ++
        if (s==0 && score<14){
          player.chngspeed(1,0.1)
        }else if (s==1 && score<14){
          player.chngspeed(1,0.15)
        }else if(s==2 && score<30) {
          player.chngspeed(1,0.15)
        }
        var next = i+1
        var prv = i-1
        if (prv<0){prv = barr.length-1}
        if (next>barr.length-1){next = 0}
        barr[next].act = 1
        barr[prv] = new Box((prv)*TWO_PI/barr.length)
      }
    }
    
    push()
    textAlign(CENTER,CENTER)
    textSize(60)
    colorMode(HSB)
    fill(c1+50,100,100)
    strokeWeight(1)
    stroke(0,0,0)
    rotate(TWO_PI-player.theta*3)
    text(score,0,0)
    pop()
    
    
  }else if(playing == 2){
    background(45)
    
    textAlign(CENTER,CENTER)
    textSize(20)
    fill(255)
    strokeWeight(1)
    stroke(0)
    text('Difficulty',0,-150)
    text('Speed',0,-25)
    text('Sound',0,100)
    rectMode(CENTER)
    
    var ocrs = 0
    if (mouseX>=5 && mouseX<=35 && mouseY>=10 && mouseY<=40){ocrs=1}
    
    push()
    rectMode(CENTER)
    fill(255)
    strokeWeight(0)
    translate(20-width/2,25-height/2)
    rotate(PI/4)
    rect(0,0,30+5*ocrs,10+2*ocrs)
    rotate(PI/2)
    rect(0,0,30+5*ocrs,10+2*ocrs)
    pop()
    //rect(20,25,30,30)
    
    for (let l=0;l<3;l++){
      fill(41)
      if (l==d){fill(255)}
      rect(-20+l*20,-120,20)
    }
    
    for (let l=0;l<3;l++){
      fill(41)
      if (l==s){fill(255)}
      rect(-20+l*20,5,20)
    }
    
    for (let l=0;l<2;l++){
      fill(41)
      if (l==snd){fill(255)}
      rect(-10+l*20,130,20)
    }
    
  }
}