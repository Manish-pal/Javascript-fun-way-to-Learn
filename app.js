document.addEventListener('DOMContentLoaded', () => {

//card options consists of the img cards
const cardArray = [
	{
		name: 'fries',
		img : 'images/fries.png'
	},
	{
		name: 'fries',
		img : 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img : 'images/cheeseburger.png'
	},
	{
		name: 'cheeseburger',
		img : 'images/cheeseburger.png'
	},
	{
		name: 'ice-cream',
		img : 'images/ice-cream.png'
	},
	{
		name: 'ice-cream',
		img : 'images/ice-cream.png'
	},
	{
		name: 'milkshake',
		img : 'images/milkshake.png'
	},
	{
		name: 'milkshake',
		img : 'images/milkshake.png'
	},
	{
		name: 'pizza',
		img : 'images/pizza.png'
	},
	{
		name: 'pizza',
		img : 'images/pizza.png'
	},
	{
		name: 'hotdog',
		img : 'images/hotdog.png'
	},
	{
		name: 'hotdog',
		img : 'images/hotdog.png'
	}										
] 
  //for randomly placing the cards in the game.
	cardArray.sort(() => 0.5 - Math.random());

	//getting the element by the css selctor grid.
	const grid = document.querySelector('.grid');
	const resultDislay = document.querySelector('#result');
	const attempts = document.querySelector('#Attempts');
  
	var cardChosen = [];
	var cardChosenId = [];
	var cardsWon = [];
	var numOfAttempts = 1;


	//creates your Board
	function createBoard() {
		for(let i = 0; i < cardArray.length; i++) {
			//creates an img HTML element 
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');    // sets the blank image on all the cards
			card.setAttribute('data-id', i);                 // assigns the cards with a unique Id
			card.addEventListener('click', flipcard);        // calls the method once clicked 
			grid.appendChild(card);                          // appends into the grid div
		}
	}

	//check your matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');       // gets all the elements with css selector 
		const optionOneId = cardChosenId[0];                
		const optionTwoId = cardChosenId[1];
		

		if(cardChosen[0] === cardChosen[1]) {

			alert('You have found a match');
			cards[optionOneId].setAttribute('src','images/whiteish.png');
			cards[optionTwoId].setAttribute('src','images/whiteish.png');
			cardsWon.push(cardChosen);
		} 
		else {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			alert('sorry! not matched');
		}

		cardChosen = [];
		cardChosenId = [];
		resultDislay.textContent = cardsWon.length;

		if(cardsWon.length === cardArray.length/2) {

			resultDislay.textContent = 'Congratulation you have found them all!';
			attempts.textContent = (numOfAttempts/2) + 1;
		}

	}

	//flip your card
	function flipcard() {

		numOfAttempts++;
		var cardId = this.getAttribute('data-id');
		cardChosen.push(cardArray[cardId].name);
		cardChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if(cardChosen.length === 2) {

			setTimeout(checkForMatch, 500);
		}

	}

	createBoard();


});
