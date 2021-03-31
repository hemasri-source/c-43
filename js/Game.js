class Game{
    constructor(){
        
    }

getState(){
    var stateRef = database.ref('gameState')
    stateRef.on("value", function(data){
        gameState = data.val()

    })

}
update(state){
    database.ref('/').update({
        gameState:state
    })

    
}
async start(){ 
    if(gameState === 0){
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){ playerCount = playerCountRef.val();
         player.getCount();
         } form = new Form() 
         form.display();
         }
         car1 = createSprite(100,200)
         car1.addImage(c1)
         car1.debug="true"
         car2 = createSprite(300,200)
         car2.addImage(c2)
         car2.debug="true"
         car3 = createSprite(500,200)
         car3.addImage(c3)
         car3.debug="true"
         car4 = createSprite(700,200)
         car4.addImage(c4)
         car4.debug="true"
         cars = [car1,car2,car3,car4]
         passedFinish = false
        }


play (){
    form.hide()
    textSize(30)
    text("Game Start", 120, 100)
    Player.getPlayerInfo()
    if(allPlayers !== undefined){
        background("white")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
       // var d_position = 130
       var index = 0
       var x = 175
       var y
    for(var plr in allPlayers){
        index = index + 1
        x = 200 + (index*200) + allPlayers[plr].xPos
        y = displayHeight - allPlayers[plr].distance
        cars[index-1].x = x
        cars[index - 1].y = y
        if(index === player.index){
        cars[index-1].shapeColor="red"
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
        if(cars[index-1].isTouching(obstacels)){
            yvel-=0.9
            slide.play()

        }
        }
        //d_position = d_position + 20
        //text(allPlayers[plr].name+":"+ allPlayers[plr].distance,120,d_position)
    }
}

if(player.distance<4000){
if(keyIsDown(38)&& player.index!==null){
    yvel += 0.9
    if(keyIsDown(37)){
        xvel -= 0.2
    }
    if(keyIsDown(39)){
        xvel += 0.2
    }
}
else if(keyIsDown(38)&&yvel>0 && player.index!==null){
    yvel-=0.1
    xvel*=0.9
}
else{
yvel*=0.985
xvel*=0.985
}
}
else if(passedFinish===false){
    yvel*=0.7
    xvel*=0.7
    Player.updateFinishedPlayers()
    player.place=finishedPlayers
    player.update()
    passedFinish=true
}
else{
    xvel*=0.8
    yvel*=0.8
}
player.distance+=yvel
yvel*=0.985
player.xPos += xvel
xvel*=0.985
player.update()
if(player.distance>4400){
    gameState = 2
}
drawSprites()
}
end(){
    console.log("Game Over")
}
}
