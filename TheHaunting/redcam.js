// Copyright (c) 2020-2023 ml5
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
  tint(255, 255, 255, 150); // changed opacity 

}

// Event when model is loaded
function modelReady() {
  console.log("Model ready!");
}

function draw() {
}
