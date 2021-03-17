var canvas;
var music;
var disc1;
var disc2;
var disc3;
var disc4;
var box;
var log1, log2, log3;

function preload() {

    music = loadSound("music.mp3");

}


function setup() {

    canvas = createCanvas(800, 600);


    disc1 = createSprite(100, 580, 180, 20);
    disc1.shapeColor = "blue";


    disc2 = createSprite(300, 580, 180, 20);
    disc2.shapeColor = "orange";


    disc3 = createSprite(500, 580, 180, 20);
    disc3.shapeColor = "purple"


    disc4 = createSprite(700, 580, 180, 20);
    disc4.shapeColor = "green";

    box = createSprite(Math.round(random(20, 750)), 50, 50, 50);
    box.velocityX = -8;
    box.velocityY = 5;

    log1 = createSprite(2, 350, 10, 700);
    log1.shapeColor = "lightgrey";

    log2 = createSprite(800, 350, 10, 700);
    log2.shapeColor = "lightgrey";

    log3 = createSprite(400, 2, 800, 10);
    log3.shapeColor = "lightgrey";

}

function draw() {
    background("lightgrey");
    createEdgeSprites();


    box.bounceOff(log1);
    box.bounceOff(log2);
    box.bounceOff(log3);


    if (box.isTouching(disc1) && box.bounceOff(disc1)) {
        box.shapeColor = "blue"
        box.velocityX = -3;
        music.play();
    }


    if (box.isTouching(disc2) && box.bounceOff(disc2)) {
        box.shapeColor = "yellow"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if (box.isTouching(disc3) && box.bounceOff(disc3)) {
        box.shapeColor = "purple"
        box.velocityX = -3;
        music.stop();
    }

    if (box.isTouching(disc4) && box.bounceOff(disc4)) {
        box.shapeColor = "green"
        box.velocityX = 3;
        music.play();
    }







    drawSprites();

}