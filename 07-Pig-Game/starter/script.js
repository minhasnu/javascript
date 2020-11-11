'use strict';
var scores, roundScore,activePlayer,dice,gamePlaying;
init();
document.querySelector('#current--'+activePlayer).textContent = dice;
//document.querySelector('#current--'+activePlayer).innerHTML = '<em>' + dice + '</em>';
// document.querySelector('.btn--roll').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {

    if(gamePlaying){
         //get a random number
        var dice = Math.floor(Math.random()*6) + 1;

        //display the number on the dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // add the number to the score if the number is not 1

        if (dice !== 1) {
            //add value and active player remains the same
            roundScore += dice;
            document.getElementById('current--'+activePlayer).textContent = roundScore;

        } else {
            // current score becomes zero and then the player is toggled
            nextPlayer();        
        }
        

    }
   
});

document.querySelector('.btn--hold').addEventListener('click',function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        console.log('player '+activePlayer + ' won ');
        document.querySelector('#name--'+activePlayer).textContent = 'WINNER';
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('score--0').textContent = '0';
        document.getElementById('score--1').textContent = '0';
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
    gamePlaying = true;


}

function nextPlayer() {
      
    roundScore = 0;
    document.getElementById('current--'+activePlayer).textContent = roundScore;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  

}
