var angle=10;
var speed=0.01;

function setup(){
  createCanvas(windowWidth,windowHeight);  fill(189,126,300, 100);
}

function draw(){
  var l0=map(mouseX,0,width,10,300);
  var l1=map(mouseY,0,height,10,300);
  
  background(255);
  
  translate(width/2,height/2);
  rotate(angle);
  for (var i=0;i<5;i++){
    push();
    rotate(i*TWO_PI/5);
    translate(0,l0);
    ellipse(0,0,50,50);
    fill(189,126,i, 100);
    
    rotate(angle);
    for(var j=0;j<5;j++){
      push();
      rotate(j*TWO_PI/5)
      translate(0,50);
      ellipse(0,0,50,50);
      fill(189,126,186, 150);
      
        
       rotate(angle);
    for(var k=0;k<5;k++){
      push();
      rotate(k*TWO_PI/5);
      translate(0,100);
      ellipse(0,0,50,50); 
      fill(189,126,300, 180);
      pop();
    }
      pop();
    }
    pop();
  }
    angle+=speed;
  }

        
        
        
        
        
        
        
  
  
  