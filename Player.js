class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
        this.startTime=0;
        this.endTime=0;
        this.rank=null;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on('value',function(data){
            playerCount=data.val();
        });
        console.log(playerCount)
    }
    writeCount(pCount){
          database.ref('/').update({
            playerCount:pCount
        })
    }
    update(){ // update name and distance
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
            //endTime:this.endTime
        })
    }
    readCAE(){
        var carsAtEndRef=database.ref('carsAtEnd')
        carsAtEndRef.on('value',(data)=>{
            this.rank=data.val();
        });
    }
    static writeCAE(cAtEnd){
        database.ref('/').update({
            carsAtEnd:cAtEnd
        })
    }

static getPlayerInfo() // when it is not referenced by any object
{
var playerInfoRef=database.ref('players');
playerInfoRef.on('value',(data)=>{ // no reference to object - arrow functions
    allplayers=data.val();
})
}
}