function setup(circle) {
  createCanvas(1200,1600);
  fill(255,255,255);
  noStroke()
  background(0,128,285)
  ellipse(500,350,300);
  ellipse(500,200,150)
  ellipse(500,100,100)
  //hat
  fill(0,0,0)
  rect(475,20,50,35)
  fill(34,34,34)
  rect(455,60,90,10)
  //eyes
  ellipse(470,100, 20)
  ellipse(530,100,20)
  //buttons
  fill(255,77,255)
  ellipse(500,225,30)
  ellipse(500,350,45)
  ellipse(500,280,35)
  ellipse(500,155,20)
  //snow
  fill(255,255,255)
  rect(30, 155, 10,10);
  rect(75,350,10,10)
  rect(105,300,10,10)
  rect(125,45,10,10)
  rect(150,200,10,10)
  rect(250,245,10,10)
  rect(265,325,10,10)
  rect(280,95,10,10)
  
  //snowy ground
  rect(0,400,1500,500)
  // snowballs on left side
  fill(255,255,255)
  ellipse(320,400,10)
  ellipse(345,400,35)
  //snowballs on right side
  ellipse(655,400,25)
  ellipse(680,400,25)
  ellipse(668,385,20)
}
function circle(x, y, diameter) {
  ellipse(x,y,w,h)
  
}