const board = [ -1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = '1';


function renderBoard(){ 
    const allBoxes = document.querySelectorAll('.box'); 
            
    allBoxes.forEach((boxElement, i)=>{   
        if(board[i] ==='2'){
            boxElement.innerHTML = '<img src="butterfly.png" height = "55px" />';
        }
        else if(board[i] ==='1'){
            boxElement.innerHTML = '<img src="plant.png" height = "73px" />';
        }
        else {
            boxElement.innerHTML = '';
        }
    })
}

renderBoard();


function selectBox(boxNumber){

    if(board[boxNumber] !== -1){
        alert("Invalid Move");
        return;
    }

    board[boxNumber] = currentPlayer;
    renderBoard();
            

    if(currentPlayer === '1'){
        currentPlayer = "2";
    } else {
        currentPlayer = '1';
    }


    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
            
    checkWinner();
}


function resetBoard(){
    board.fill(-1);
    renderBoard();

    currentPlayer = "1";
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}

        
function isPlayerPresent(places, player){
    const a = places[0];
    const b = places[1];
    const c = places[2];
            
    if(board[a]==player && board[b]==player && board[c]==player){
        return true;
    } else {
        return false;
    }

}


function checkWinner(){

    if (isPlayerPresent([0,1,2], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([3,4,5], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([6,7,8], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([0,3,6], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([1,4,7], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([2,5,8], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([0,4,8], "1")){
        alert("Player 1 Wins");
    } else if (isPlayerPresent([2,4,6], "1")){
        alert("Player 1 Wins");
    } 


    if (isPlayerPresent([0,1,2], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([3,4,5], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([6,7,8], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([0,3,6], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([1,4,7], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([2,5,8], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([0,4,8], "2")){
        alert("Player 2 Wins");
    } else if (isPlayerPresent([2,4,6], "2")){
        alert("Player 2 Wins");
    }

}
        
    