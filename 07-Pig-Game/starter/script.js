'use strict';
var scores, roundScore, activePlayer , gamePlaying, secondTurn, dice;
init();
document.querySelector('#current--'+activePlayer).textContent = dice;
//document.querySelector('#current--'+activePlayer).innerHTML = '<em>' + dice + '</em>';
// document.querySelector('.btn--roll').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {

    if(gamePlaying){
         //get a random number
        var prevDice;
        
        if(secondTurn){
            prevDice = dice;
            
        } else {
            secondTurn = true;     
        }

        dice = Math.floor(Math.random()*6) + 1;
        
        console.log(dice,prevDice);
        //display the number on the dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        switch(true) {
            case dice === 1 :
                nextPlayer();    
                break;
            case dice == 6 && prevDice == 6:
                // if current roll and previous roll is 6 then the total score is lost and the game goes to the next player
                scores[activePlayer] = 0;
                document.getElementById('score--'+activePlayer).textContent = '0';

                nextPlayer();
            default:
                roundScore += dice;
                document.getElementById('current--'+activePlayer).textContent = roundScore;

        }
        

    }
   
});

document.querySelector('.btn--hold').addEventListener('click',function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];

    var input,winningScore;
    input = document.querySelector('.final-score').value ;

    if(input){
        winningScore = input;
    } else {
        winningScore = 100;
    }

    if(scores[activePlayer] >= winningScore){
        console.log('player '+activePlayer + ' won ');
        document.querySelector('#name--'+activePlayer).textContent = 'WINNER';
        roundScore = 0;
        activePlayer = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('current--1').textContent = '0';
        document.getElementById('current--0').textContent = '0';

        gamePlaying = false;


    } else {
        nextPlayer();

    }
});

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.getElementById('current--0').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    gamePlaying = true;
    secondTurn = false;



}

function nextPlayer() {
      
    roundScore = 0;
    document.getElementById('current--'+activePlayer).textContent = roundScore;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  
    secondTurn = false;

}
