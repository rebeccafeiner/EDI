//Random

function setup() {
  createCanvas(windowWidth, windowWidth);
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
 
  
  var sideLength = (720 - 2*windowPane)/num; //pixel length
  
  
  for(y = 0; y < sideLength * num; y = y + sideLength){
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


function draw() {
  
  
  
  var windowPane2 = 20; //padding around the box array
  var num2 = 40; //number of boxes
  var shift2 = 15; //the degree of shift in our quad
  var space2 = 30; //space between squares

  translate(windowPane2 + space2/2,windowPane2 + space2/2); //starting point of the window at (x,y)
  
  
  var sideLength2 = (windowWidth - 2*windowPane2)/num2; //pixel length
  //clear();
  
  for(y = 0; y < sideLength2 * num2; y = y + sideLength2){
    for (x = 0; x < sideLength2 * num2; x = x + sideLength2){
      fill(random(75, 255), 0, random(200, 255)); //random color RGB
    quad (x + random(-shift2,shift2), y + random(-shift2,shift2), x + sideLength2 - space2 + random(-shift2,shift2), y + random(-shift2,shift2),x + sideLength2 - space2 + random(-shift2,shift2), y + sideLength2- space2 + random(-shift2,shift2), x + random(-shift2,shift2), y+ sideLength2 - space2 + random(-shift2,shift2)); //sq 1
  }
  }
  
  //noLoop();
}



