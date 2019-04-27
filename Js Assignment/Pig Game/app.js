/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score , currentScore, currentPlayer ;

currentPlayer = 0;
score = [0 ,0];
currentScore = 0;

document.getElementById("dice_display").classList.add("hide");

document.getElementById("score-0").innerText = "0" ;
document.getElementById("current-0").innerText = "0";
document.getElementById("score-1").innerText = "0" ;
document.getElementById("current-1").innerText = "0";

function rollDice(){
    var dice = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice_display").classList.add("show");
    document.getElementById("dice_display").src =  "dice-" + dice + ".png";

    if(dice === 1){
        currentScore = 0 ;
        hold();
        return;
    }

    currentScore += dice ;
    
    document.getElementById("current-"+currentPlayer).innerText = currentScore ;
    
    if(currentScore + score[currentPlayer] >= 10){
        score[currentPlayer] += currentScore ;
        document.getElementById("current-" + currentPlayer).innerText = 0;
        document.getElementById("score-"+currentPlayer).innerText = score[currentPlayer];
        document.querySelector("#name-"+currentPlayer).innerText = "Winner";
        document.getElementById("holdButton").classList.remove("show");
        document.getElementById("rollButton").classList.remove("show");
        document.getElementById("holdButton").classList.add("hide");
        document.getElementById("rollButton").classList.add("hide");
        return;     
    }
}



function hold(){
    score[currentPlayer] += currentScore ;
    document.getElementById("current-" + currentPlayer).innerText = 0;
    document.getElementById("score-"+currentPlayer).innerText = score[currentPlayer];
    document.querySelector(".player-" + currentPlayer + "-panel").classList.remove("active");
    currentPlayer = (currentPlayer + 1 ) % 2 ;
    document.querySelector(".player-" + currentPlayer + "-panel").classList.add("active");
    currentScore = 0 ;
}

function newGame(){
    currentPlayer = 0;
    score = [0 ,0];
    currentScore = 0;
    
    document.getElementById("dice_display").classList.add("hide");
    document.querySelector("#name-0").innerText = "Player 1";
    document.querySelector("#name-1").innerText = "Player 2";
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
        
    document.getElementById("holdButton").classList.remove("hide");
    document.getElementById("rollButton").classList.remove("hide");
    document.getElementById("holdButton").classList.add("show");
    document.getElementById("rollButton").classList.add("show");

    document.getElementById("score-0").innerText = "0" ;
    document.getElementById("current-0").innerText = "0";
    document.getElementById("score-1").innerText = "0" ;
    document.getElementById("current-1").innerText = "0";        
}