let bottomImg, topImg, topResized;

function preload() {
    topImg = loadImage('../images/maptop.jpg');
    bottomImg = loadImage('../images/mapbottom.jpg');
}

function setup() {
    createCanvas(900, 700);
    background(255, 255, 0);

    topImg.resize(width, height);
    image(bottomImg, 0, 0, width, height);
}

function mouseDragged() {
    copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}


