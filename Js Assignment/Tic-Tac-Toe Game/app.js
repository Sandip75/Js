function startGame(){

    //document.getElementsByClassName("Square").innerText = "";   // Why It does Not work ?
    for(var i=1 ; i <= 9 ; i++){
        clearText(i);
    }

    document.turn = "X";
    if(Math.random() < 0.5){
        document.turn = "O";
    }
    document.winner  = null; 
    setMessage(document.turn + " get ready to start");
}

function setMessage(msg){
    document.getElementById("message").innerText = msg; 
}

function nextTurn(Square){
    if(document.winner != null){
        setMessage("Already Won");
        return;
    }

    if(Square.innerText == "O" || Square.innerText == "X"){
        setMessage("Try at other Bracket");
        return;
    }
    
    Square.innerText = document.turn ;
    switchTurn();
}

function switchTurn(){
    if(checkWinner(document.turn)){
        document.winner = document.turn;
        setMessage(document.turn + " Won ");
        return;
    }
    if(document.turn == "X"){
        document.turn = "O";
    }else{
        document.turn = "X";
    }
    setMessage("It is " + document.turn +" turn");
}

function checkWinner(move){
    var result = false;
    if(checkRow( 1 , 2, 3, move) || checkRow( 4 , 5 , 6 , move) || checkRow( 7 , 8 , 9 , move)
               || checkRow( 1 , 4, 7, move) || checkRow( 2 , 5, 8, move) || checkRow( 3 , 6, 9, move)
               || checkRow( 1 , 5, 9, move) || checkRow( 3 , 5, 7, move)){
                   result = true;
               }

    return result;
}

function checkRow(a , b , c , move){
    var result = false;
    if(getBoxValue(a) == move && getBoxValue(b) == move && getBoxValue(c) == move ){
        result = true;
    }
    return result;
}

function getBoxValue(number){
    return document.getElementById("b"+number).innerText;
}

function clearText(number){
    document.getElementById("b"+number).innerText = "";
}