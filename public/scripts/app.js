var scores, roundScore, activePlayer, gameplaying, priorRole;

init();

/* game initalized functionality */
function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	priorRole = 0;
	gameplaying = true;
	
	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('#name-' + activePlayer).style.color = '#555';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#name-0').style.borderBottom = '2px solid #555';
}

/* new game functionality */
document.querySelector('.btn-new').addEventListener('click', init);

/* change player functionality */
function nextPlayer() {
	roundScore = 0;
	document.querySelector('#name-' + activePlayer).style.borderBottom = 'none';
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	
	document.querySelector('#name-' + activePlayer).style.borderBottom = '2px solid #555';
}

/* roll dice functionality */
document.querySelector('.btn-roll').addEventListener('click', function() {	
	if(gameplaying === true) {
		var randomNumber = Math.floor(Math.random() * 6) + 1;

		if(priorRole === 6 && randomNumber === 6) {
			document.querySelector('#score-' + activePlayer).textContent = 0;
			document.querySelector('#current-' + activePlayer).textContent = 0;		
			priorRole = 0;
			return nextPlayer();
		} else {
			priorRole = randomNumber;
		}
		
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = '/public/images/dice-' + randomNumber + '.png';
		
		if(randomNumber !== 1) {
			roundScore += randomNumber;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;		
		} else {
			nextPlayer();
		}
	}
});

/* dice hold functionality */
document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gameplaying === true) {
		scores[activePlayer] += roundScore;

		if(scores[activePlayer] >= 20) {
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('#name-' + activePlayer).style.color = '#eb4d4d';
			gameplaying = false;
		} else {
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();	
		}
	}
});