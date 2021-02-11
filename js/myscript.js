new Vue({
el: '#punch-bag',
data: {
startGame: 100,
gameOver: false,
weakBag: false,
say: "Ooops! Bag bursted! click restart to start again"
},
methods: {
    punch: function(){
        this.startGame -= 10
        if(this.startGame === 30){
           this.weakBag = true
           alert("Bag is weak! Bag's health is 30% and about to burst")
        }
       else if(this.startGame <= 0){
            this.gameOver = true
          
        }
    },
    restart: function(){
        this.startGame = 100
        this.gameOver = false
        this.weakBag = false
    }
}
});

$(document).ready(function(){
    $("#bag").click(function(){
       $("#bag").fadeTo("fast", 0.5).fadeTo("fast", 1)
    });
})