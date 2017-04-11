var scores, roundScore, activePlayer, gameplaying;

init();

/* game initalized functionality */
function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gameplaying = true;
	
	document.querySelector('.dice').style.display = 'none';
}

/* change player functionality */
function nextPlayer() {
	roundScore = 0;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
}

/* roll dice functionality */
document.querySelector('.btn-roll').addEventListener('click', function() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = '/public/images/dice-' + randomNumber + '.png';
	
	if(randomNumber !== 1) {
		roundScore += randomNumber;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;		
	} else {
		nextPlayer();
	}
});

/* dice hold functionality */
document.querySelector('.btn-hold').addEventListener('click', function() {
	scores[activePlayer] += roundScore;
	
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	nextPlayer();
});