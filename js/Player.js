class Player {
    constructor (){
        this.name=null
        this.index = null
        this.distance = 0
        this.xPos = 0
        this.place=0
    }

getCount (){
    var countRef = database.ref('playerCount')
    countRef.on("value", (data)=>{
        playerCount = data.val()
    })
}

    updateCount(count){
        database.ref('/').update({
           playerCount:count
        })
    
        
    }
    update(){
var playerIndex = "players/player" + this.index
database.ref(playerIndex).set({
    name : this.name,
    distance:this.distance,
    place:this.place,
     xPos:this.xPos
})
}
getFinishedPlayers(){
    var playerRef = database.ref('finishedPlayers')
    playerRef.on("value",(data)=>{
        finishedPlayers = data.val()
    }) 
}
static updateFinishedPlayers(){
    database.ref('/').update({
        finishedPlayers:finishedPlayers+1
    })
    this.place+=1
}
static getPlayerInfo(){
    var playerInfo = database.ref('players')
    playerInfo.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}