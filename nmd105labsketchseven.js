// Lab Exercise #7 - Avery Haskell

let x;
let y;

let speedX;
let speedY;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  x = random(0, 300);
  y = random(0, 300);

  speedX = random(2, 4);
  speedY = random(2, 4);
}

function draw() {
  background("thistle");
  
// Make the sprite bounce around the canvas.
  x = x + speedX;
  y = y + speedY;
  changeSprite(x, y, 1, 178, 172, 136);
  // keyPressed(x, y);

  if (x >= 300 || x <= 0) {
    speedX = speedX * -1;
  }
  if (y >= 300 || y <= 0) {
    speedY = speedY * -1;
  }
}

// Change sprite from bear to planet when mouseIsPressed.
function changeSprite(x, y, size, myRed, myGreen, myBlue) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    scale(size);
// Planet.
    noFill();
    stroke(myRed, myGreen, myBlue);
    strokeWeight(8);
    ellipse(50, 50, 150, 50);
    noStroke();
    fill("darkkhaki");
    ellipse(50, 50, 100);
    // Northern latitude.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 200, -20, OPEN);
    // Southern latitude.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 30, 150, OPEN);
    // North pole.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 240, -60, OPEN);
    // South pole.
    fill("darkkhaki");
    arc(50, 50, 100, 100, 60, 120, OPEN);
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);
// Bear.
    stroke("thistle");
    fill(188, 154, 125);
    ellipse(15, 15, 50); // Left ear.
    fill("rgb(228,203,180)");
    ellipse(20, 20, 40); // Left inside ear.
    fill(188, 154, 125);
    ellipse(85, 15, 50); // Right ear.
    fill("rgb(228,203,180)");
    ellipse(80, 20, 40); // Right inside ear.
    fill(188, 154, 125);
    ellipse(50, 50, 100); // Head.
    fill("rgb(228,203,180)");
    stroke("rgb(228,203,180)");
    ellipse(50, 70, 50, 40); // Snout.
    fill("pink");
    stroke(188, 154, 125);
    strokeWeight(0.5);
    ellipse(50, 60, 25, 15); // Nose.
    pop();
  }
}
// Change the direction of the sprite depending on the arrow key that is pressed.
function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    speedY = speedY * -1;
  }
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    speedX = speedX * -1;
  }
}
