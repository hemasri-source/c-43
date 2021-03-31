var gameState = 0
var playerCount = 0
var form
var player
var game
var allPlayers
var distance = 0
var database
var cars, car1,car2, car3, car4
var c1,c2,c3,c4,track
var yvel, xvel
var oil
var slide
var passedFinish
var finishedPlayers = 0

function preload(){
c1 = loadImage("images/car1.png")
c2 = loadImage("images/car2.png")
c3 = loadImage("images/car3.png")
c4 = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
oil = loadImage("images/f1.png")
slide = loadSound("sound/sliding.mp3")
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database()
    yvel = 0
    xvel = 0
    obstacels = createGroup()
    game = new Game()
    game.getState()
    game.start()
    for(i=0;i<5;i++){

    

    var w = random(200,950);
    var h = random(-height*4, height - 300)

    oilSpill = createSprite(w,h)
    oilSpill.addImage(oil)
    oilSpill.debug = "true"
    obstacels.add(oilSpill)
    }
}

function draw(){
    background("white");
    if(playerCount===4&&finishedPlayers===0){
        game.update(1)
    }
    if (gameState === 1){
        clear()
        game.play()
    }
    if (finishedPlayers === 4){
        game.update(true)
    }
    if(gameState === 2){
        game.end()
    }

    
}

