new p5((sketch) => {
  let num = 2000;
  let range = 6;

  let ax = [];
  let ay = [];

  let box = document.querySelector('.button');
  let boxHeight = box ? box.offsetHeight : window.innerHeight;

  sketch.windowResized = function () {
    sketch.resizeCanvas(window.innerWidth, boxHeight);
  };

  sketch.setup = function () {
    let myCanvas = sketch.createCanvas(window.innerWidth, boxHeight);
    myCanvas.position(0, 0);

    for (let i = 0; i < num; i++) {
      ax[i] = sketch.width / 0;
      ay[i] = sketch.height / 0;
    }
    sketch.frameRate(10);
  };

  sketch.draw = function () {
    sketch.stroke(200, 20, 20);
    sketch.fill(200, 220, 20, 90);
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
    // sketch.background(77, 41, 1, 0);

    // // Shift all elements 1 place to the left
    // for (let i = 1; i < num; i++) {
    //     ax[i - 1] = ax[i];
    //     ay[i - 1] = ay[i];
    // }

    // // Put a new value at the end of the array
    // ax[num - 1] += sketch.random(-range, range);
    // ay[num - 1] += sketch.random(-range, range);

    // // Constrain all points to the screen
    // ax[num - 1] = sketch.constrain(ax[num - 1], 0, sketch.width);
    // ay[num - 1] = sketch.constrain(ay[num - 1], 0, sketch.height);

    // // Draw a line connecting the points
    // for (let j = 1; j < num; j++) {
    //     let val = (j / num) * 204.0 + 51;
    //     sketch.stroke(val);
    //     sketch.strokeWeight(15);
    //     sketch.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    // }
  };

  sketch.mousePressed = function () {
    background(220, 200, 200);
  }
});


// sketch.setup = function () {
//   createCanvas(400, 400);
//   background(220, 200, 200);
// }

// sketch.draw = function () {
//   stroke(200, 20, 20);
//   fill(200, 220, 20, 90);
//   ellipse(mouseX, mouseY, 40, 50);
// }

// sketch.mousePressed = function () {
//   background(220, 200, 200);
// }