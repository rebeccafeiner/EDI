//Random

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noStroke();
  frameRate (2);
}

function draw() {

  background(172, 130, 2320);

  var windowPane = 10; //padding around the box array
  var num = 20; //number of boxes
  var shift = 10; //the degree of shift in our quad
  var space = 50; //space between squares

  translate(windowPane + space/2,windowPane + space/2); //starting point of the window at (x,y)


  var sideLength = (windowWidth - 2*windowPane)/num; //pixel length


  for(y = 0; y < windowHeight; y = y + sideLength){
    for (x = 0; x < sideLength * num; x = x + sideLength){
      fill(random(200, 255), 0, random(200, 255)); //random color RGB
      quad (x + random(-shift,shift), y + random(-shift,shift),

          x + sideLength - space + random(-shift,shift), y + random(-shift,shift),

          x + sideLength - space + random(-shift,shift), y + sideLength- space + random(-                   shift,shift),

          x + random(-shift,shift), y+ sideLength - space + random(-shift,shift)); //sq 1

  }
  }

  //noLoop();
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
