// fetch the objects using Dom 

const gameInfo=document.querySelector('.game-info');
const boxes=document.querySelectorAll('.box');
const gameBtn=document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winingPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// lets create a funciton To start the Game

function initGame(){
    currentPlayer = "X";
    gameGrid=["","","","","","","","","",];
    boxes.forEach((box,index)=>{
        box.innerText ="";
        boxes[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`;
    })
    
    gameBtn.classList.remove('active');
    gameInfo.classList.add('active-2');
    gameInfo.innerText=`current Player - ${currentPlayer}`;
}



function handleClick(index){
    if(gameGrid[index]===""){
        gameGrid[index]=currentPlayer;
        boxes[index].innerText=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();
        }
}

// This function checks the winner
function checkGameOver(){
    let answer="";
    winingPositions.forEach((position)=>{
        // all threee boxes should be non empty and should have same vlaue 
    if((gameGrid[position[0]]!== "" || gameGrid[position[1]]!== "" || gameGrid[position[2]]!== "") 
    && ( gameGrid[position[0]]=== gameGrid[position[1]] ) && ( gameGrid[position[1]] === gameGrid[position[2]]))
        // checking whether the winner is X or O
        {
            if(gameGrid[position[0]]==="X"){
                answer="X";
            }
            else{
                answer="O";
            }
            // this will prevent the game to run when the winner is declared by disabling the pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents="none"
            });
            
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    if (answer !== ""){
        gameInfo.innerText=`Winner is - ${answer}`
        gameBtn.innerText="New game";
        gameBtn.classList.add("active");
        return
    }

    // lets check whether there is a Tie
    let fill_count = 0;
    gameGrid.forEach((box)=>{
        if(box!== ""){
            fill_count++
        }
    });
    if (fill_count===9){
        gameInfo.innerText="Game Tied !";
        gameBtn.innerText="New game";
        gameBtn.classList.add("active");
    }

}


function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerText=`current Player - ${currentPlayer}`;
}



boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    });
});

boxes.forEach((box,index)=>{
    boxes[index].style.pointerEvents="none";}
);
gameBtn.addEventListener('click',initGame);
