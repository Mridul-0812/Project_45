var pm;
var redGhost;
var blueGhost;
var opm;
var up;
var down;
var left;

var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;

var clouds;

var heart;
var heart2;
var heart3;

var gamestate = "serve"

var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20
var wall21
var wall22
var wall23
var wall24
var wall25
var wall26
var wall27
var wall28
var wall29
var wall30
var wall31
var wall32

var jadu;
var jadu2;

function preload(){
    pmImg = loadImage("PacMan.png")
    redGhostImg = loadImage("RedGhost.png")
    blooGhostImg = loadImage("BlooGhost.png")
    upImg = loadImage("UP.png")
    leftImg = loadImage("LEFT.png")
    downImg = loadImage("DOWN.png")
    cloudsImg = loadImage("clouds.png")
    heartImg = loadImage("heart.png")
    heart2Img = loadImage("heart.png")
    heart3Img = loadImage("heart.png")
}

function setup() {
    createCanvas(500, 500)

    pm = createSprite(250, 120)
    pm.addImage("PacMan", pmImg)

    up = createSprite(250, 120)
    up.addImage("UP", upImg)

    down = createSprite(250, 120)
    down.addImage("DOWN", downImg)

    left = createSprite(250, 120)
    left.addImage("LEFT", leftImg)
   
    redGhost = createSprite(250, 375)
    redGhost.addImage("RedGhost", redGhostImg)
   
    blueGhost = createSprite(100, 120)
    blueGhost.addImage("BlooGhost", blooGhostImg)

    clouds = createSprite(268, 160)
    clouds.addImage("clouds", cloudsImg)

    heart = createSprite(200, 200)
    heart.addImage("heart", heartImg)

    heart2 = createSprite(200, 200)
    heart2.addImage("heart", heart2Img)

    heart3 = createSprite(200, 200)
    heart3.addImage("heart", heart3Img)

    wall1 = createSprite(250,5, 500, 10)
    wall2 = createSprite(5,250, 10, 500)
    wall3 = createSprite(250,495, 500, 10)
    wall4 = createSprite(495,250, 10, 500)

    var rand =  (random(1,500))
    console.log(rand)
}

function draw() {

    
    background("skyblue")
    drawSprites()
    
    pm.scale = 0.1
    up.scale = 0.1
    down.scale = 0.1
    left.scale = 0.1
    blueGhost.scale = 0.1
    redGhost.scale = 0.2
    clouds.scale = 0.84
    heart.scale = 0.05
    heart2.scale = 0.05
    heart3.scale = 0.05

  }