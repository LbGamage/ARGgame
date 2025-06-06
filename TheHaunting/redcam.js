// Copyright (c) 2020-2023 ml5
// ml5-next-gen bodyPix mask background In Class 11/7 by lilyannenberg found in p5.org
// https://editor.p5js.org/lilyannenberg/sketches/imn3HnIlW
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
BodyPix
=== */

let bodypix;
let video;
let segmentation;
let opacity = 180;

let options = {
  outputStride: 16, //adjust the output stride and see which one works best!
  multiSegmentation: false,
  segmentBodyParts: true,
  flipHorizontal: true,
};

function setup() {
  createCanvas(700, 500);
  // Create the video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  bodypix = ml5.bodyPix(video, options, modelReady);
  bodypix.on("bodypix", gotResults);
}

// Event for body segmentation
function gotResults(result) {
  // Save the latest part mask from the model in global variable "segmentation"
  segmentation = result;
  //Draw the video
  image(video, 0, 0, width, height);
  image(segmentation.backgroundMask, 0, 0, width, height);
  filter(GRAY); //greyscale filter
  opacity = max(20, opacity - 3);
  tint(0, 255, 255, opacity); // changed opacity 
   console.log(opacity);
}

// Event when model is loaded
function modelReady() {
  console.log("Model ready!");
}

function draw() {
}
