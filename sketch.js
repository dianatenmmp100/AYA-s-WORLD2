let r, g, b;

function setup() {
  createCanvas(500,500);
  // Pick colors randomly
  r = random(167);
  g = random(186);
  b = random(239);
}
let circleX=360;
let circleY=200;

function draw() {
  background("blue");
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(circleX, circleY, 200, 200);
}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < 100) {
    // Pick new random color values
    r = random(167);
    g = random(186);
    b = random(239);
} else {
  circleX=mouseX;
  circleY=mouseY;
  }

}
