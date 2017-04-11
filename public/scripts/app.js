var scores, roundScore, activePlayer, gameplaying;

init();

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gameplaying = true;
	
	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = '/public/images/dice-' + randomNumber + '.png';
});