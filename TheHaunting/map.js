let bottomImg, topImg, topResized;

function preload() {
    bottomImg  = loadImage('../images/maptop.jpg');
    topImg = loadImage('../images/mapbottom.jpg');
}

function setup() {
    createCanvas(560, 720);
    background(255, 255, 0);

    topImg.resize(width, height);
    image(bottomImg, 0, 0, width, height);
}

function mouseDragged() {
    copy(topImg, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
}


