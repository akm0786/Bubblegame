var timer=60;
var hitvalue=0;
var score=0;
//function to make many bubbles
function makeBubble() {
    var manybubble = "";
    for (var i = 0; i < 176; i++) {
        let rnbubble = Math.floor(Math.random() * 10);
        manybubble += `<div class="bubble">${rnbubble}</div>`;
    }
    document.querySelector('.pannelbottom').innerHTML = manybubble;
}
//function to make the couter value descrese
function runTimer(){
    var timerfun=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('.timer').textContent=timer;
        }
        else{
            clearInterval(timerfun);
            document.querySelector('.pannelbottom').innerHTML="<div class='gameOverDiv'><h2>Game Over</h2></div>";
        }
    },1000)
}

// fucntion to generate a new  hit number 
function genNewHit(){

    hitvalue=Math.floor(Math.random()*10);
    document.querySelector('.hit').textContent=hitvalue;
}
//function to increase the score

function incScore(){
    score += 10;
    document.querySelector('.score').textContent=score;
}

//adding event listener on the bubbles 

document.querySelector('.pannelbottom').addEventListener('click',function(b){
   var bubbleValueCheckNumber = Number(b.target.textContent);
    if(hitvalue===bubbleValueCheckNumber){

        incScore();
        makeBubble();
        genNewHit();
    }

})

//first time initialization of the game
runTimer();
makeBubble();
genNewHit();
