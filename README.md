# lab-5-averyhas
lab-5-averyhas created by GitHub Classroom

The first exercise was to use the sprite(s) sketch from last exercise, and have the sprite bounce around the canvas at random (similar to the Windows
logo).

I started this by setting the x and y position variables and speed variables for my sprite:

  let x;
  let y;

  let speedX;
  let speedY;
  
  
  x = random(0, 300);
  y = random(0, 300);

  speedX = random(2, 4);
  speedY = random(2, 4);

I then added the speeds to each x/y position, and used if statements to ensure it did not go off the canvas.

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
    
The second exercise was to use the keyPressed() function in order to make the sprite move in a desired direction depending on which arrow key is pressed.

I started this by creating a keyPressed function, and then added if statements to ensure that the direction of the sprite would move when the LEFT, RIGHT,
UP, or DOWN arrow keys were pressed:

  // Change the direction of the sprite depending on the arrow key that is pressed.
  function keyPressed() {
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      speedY = speedY * -1;
    }
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      speedX = speedX * -1;
    }
  }
