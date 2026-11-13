let jpgButton;
const numCircles = 20;

function setup() {
  createCanvas(1600, 1000);
  background("black");
  frameRate(1);

  jpgButton = createButton("export JPG")
  jpgButton.mousePressed(function(){
    saveCanvas("myCanvas", "jpg")
  })
}

function draw() {
    for (let i=0; i<1;i++){
    stroke(random(255),random(255),random(255));
    noFill(); 
    strokeWeight(14);
    drawPeaceSign(random(width),random(height),160);
}
}

function mousePressed() {
    noLoop();
}

function drawPeaceSign(x, y, size) {
    noFill(); 
    strokeWeight(14);
    circle(x, y, size);
    line(x, y - size/2, x, y + size/2);
    line(x, y, x - size * 7/16, y + size/4);
    line(x, y, x + size * 7/16, y + size/4);
}