function setup() {
  createCanvas(windowWidth, windowHeight*2);
  noStroke();
  frameRate(15); // Slightly choppy for realism
  }

function draw() {
  background(0);

  let lineHeight = 9;

  // Generate red static lines
  for (let y = 0; y < height; y += lineHeight) {
    let r = random(160, 177); // Red shades
    let g = random(90, 97);    // Very low green
    let b = random(112, 116);    // Very low blue
    fill(r, g, b);
    rect(0, y, width, lineHeight);
  }

  // Add scanlines for CRT effect
  for (let y = 0; y < height; y += 4) {
    fill(0, 80); // Dark transparent overlay
    rect(0, y, width, 1);
  }

  // Occasional  flicker
  if (random() < 0.02) {
    fill(0, 0, 0, 100); 
    rect(0, 0, width, height);
  }
}