/* eslint-disable no-param-reassign */
/* ******************* Imports ******************* */

import * as finishedPopup from './finishedPopUp.js';
import * as exitPopup from './exitPopUp.js';
import cardList from './cardList.js';
import Card from './card.js';
import typeCards from './card.js';

export const userID = sessionStorage.getItem('id');
export const nickname = sessionStorage.getItem('nickname');
export let link = sessionStorage.getItem(`game.xhtml?id=${userID}&nickname=${encodeURIComponent(nickname)}`);
export const time = sessionStorage.getItem('maxTime');
export const adp1 = sessionStorage.getItem('adp1');
export const adp2 = sessionStorage.getItem('adp2');
export const adp3 = sessionStorage.getItem('adp3');
console.log(sessionStorage.getItem('maxTime'));
console.log(sessionStorage.getItem('cardsPerPlayer'));
console.log(sessionStorage.getItem('cardsPerRound'));
console.log("id"+userID);
console.log(nickname);
console.log("time"+time);
console.log("ADP1 "+adp1);
console.log("ADP2 "+adp2);
console.log("ADP3 "+adp3);
/* ******************* Creating constants for script ******************* */
// Contains all game board cards
const gameBoard = document.getElementById('game-board');
// let playerCard = document.getElementsByClassName('player-cards');
let playerCard = document.getElementsByClassName('game-info');

const boardImages = document.getElementsByClassName('board-image-container');
let handImages = document.getElementsByClassName('player-inventory');
// Contains all player cards
const myImages = document.getElementsByClassName('my-image-container');
// Contains all cards
const myImage = document.getElementsByClassName('my-image');
// Contains all word cards
const word = document.getElementsByClassName('word');
// Maximum time chosen
const maxTime = 5000;
// Time when blur happens
let blurTime = null;
// Percentage of time when blur happens
const blurPorcentage = 95;

// Contains information of card the to match
let firstCard = new Card();
// Contains information of card the to match
let secondCard = new Card();

// Dictionary of the cards in the board
const boardCardDict = {};
// Dictionary of the cards in hand for the player
const handCardsDict = {};

// Variables passed from waitingRoom
let cardsPerRound = null;
let maxTimeRound = null;
let cardsPerPlayer = null;

/* ********************* Functions used on script ********************* */

/*
 * Applies bluer to the board of cards
 */
function applyBlur() {
  if (boardImages) {
    for (let imageIndex = 0; imageIndex < boardImages.length; imageIndex += 1) {
      boardImages[imageIndex].style.filter = 'blur(2.5px)';
    }
  }
}

function dissableBlur() {
  if (boardImages) {
    for (let imageIndex = 0; imageIndex < boardImages.length; imageIndex += 1) {
      boardImages[imageIndex].style.filter = 'blur(0px)';
    }
  }
}
/*
 * Generates a random color for image border.
 */
function randomBorderColor() {
  // Código tomado de: https://www.delftstack.com/es/howto/javascript/javascript-pick-random-from-array/
  // const colorsArray = ['#E6C700', '#2EB600', '#006DE2', '#DA0012'];
  const colorsArray = [
    'rgb(230, 199, 0)',
    'rgb(46, 182, 0)',
    'rgb(0, 109, 226)',
    'rgb(218, 0, 18)',
  ];
  // check variation of second adaptation
  if (adp2 === '2A') {
    const color = '';
    return color;
  }
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
  const randomColor = colorsArray[randomIndex];
  return randomColor;
}

/*
 * If image adaption is chosen, it asigns a random border color.
 */
function changeImageColors(images, dictionary) {
  for (let index = 0; index < images.length; index += 1) {
    const color = randomBorderColor();
    // eslint-disable-next-line no-param-reassign
    images[index].style.borderColor = color;

    // Adds color card elem in the dictionary
    const elem = dictionary[index];
    elem.color = color;
    dictionary[index] = elem;
  }
}

/**
 * Change the pictures on the player's cards to the corresponding words.
 */
function changeImagesToWords() {
  // Iterate through each image and replace its content with the attribute "alt"
  for (let index = 0; index < myImage.length; index += 1) {
    myImage[index].style.display = 'none';
    word[index].style.display = 'flex';

    // Changes box to fit words.
    myImages[index].style.maxWidth = 'max-content';
  }
}

/*
 *   Handles scores of the players
 *   players => array of players
 *   scores => map with (player, score)
 */
function handleScores() {
  const players = [];
  const scores = new Map();
  players.forEach((player) => {
    player.updateScore(scores.get(player));
  });
}

/*
 * if time runs out show round winner
 */
function TimesUp() {
  // mostrar overlay
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  // popUp
  const popUpFinished = document.getElementById('popup-finished');
  popUpFinished.style.display = 'flex';
  // change nick
  if (document.getElementById('rankingNick')) {
    const rankingNickname = document.getElementById('rankingNick');
    rankingNickname.innerHTML = nickname;
  }
  if (document.getElementById('player-points')) {
    const playerPoints = document.getElementById('player-points');
    const points = sessionStorage.setItem('player-points', playerPoints);
    playerPoints.innerHTML = points;
  }

  // gamePage finished game PopUp
  const continueButton = document.getElementById('continue-button');
  continueButton.addEventListener('click', (event) => {
    if (event.target.id === 'continue-button') {
      window.location.href = `waitingRoom.xhtml?id=${userID}&nickname=${encodeURIComponent(nickname)}`;
    }
  });
  const returnToMain = document.getElementById('home-button');
  returnToMain.addEventListener('click', (event) => {
    if (event.target.id === 'home-button') {
      window.location.href = './index.html';
    }
  });
}

/*
 * Method that creates an instance of card
 * and add it to the corresponding dictionary
 */
function setCardDict(card, dictionary, key, type = 'boardCard') {
  dictionary[key] = new Card(
    card.alt,
    card.imgSrc,
    card.name,
    card.color,
    type,
  );
}

/*
 * handle points per match
 */
function updatePoints() {
  const playerPto = document.getElementById('player-points').innerHTML;
  const point = parseInt(playerPto) + 10;
  document.getElementById('player-points').innerHTML = point;
}

/*
 * Evaluates if the cards chosen match each other
 */
function match() {
  if (
    firstCard.alt === secondCard.alt
    && firstCard.name === secondCard.name
    && firstCard.color === secondCard.color
  ) {
    console.log('Match!');
    // Incrementar el puntaje
    updatePoints();
    const audio = new Audio('../assets/correct.mp3');
    audio.play();
    // Restablecer las variables firstCard y secondCard
    firstCard = new Card();
    secondCard = new Card();
    // firstCard = null;
    // secondCard = null;
  } else {
    console.log('Not a match');
    const audio = new Audio('../assets/puzzle-error.mp3');
    audio.play();
    // Restablecer las variables firstCard y secondCard
    firstCard = new Card();
    secondCard = new Card();
    // firstCard = null;
    // secondCard = null;
  }
}

/*
 * Agnostic way to add info to the firstCard or secondCard
 */
// function asingValuesToCard(card, cardInfo, typeCard) {
function asingValuesToCard(card) {
  if (firstCard.clicked) {
    secondCard = card;
    console.log('secondCard: ', secondCard);
    match();
  } else {
    firstCard = card;
    console.log('firstCard: ', firstCard);
  }
}

/*
 * Adds dinamically cards into handCardsDict
 * based on the cardsPerPlayer const
 */
function addCardsToMyHand(numCards) {
  const min = 0;
  const size = Object.keys(boardCardDict).length;

  // Seleccionar el elemento <article> con la clase "player-inventory"
  const playerInventory = document.querySelector('.player-inventory');

  for (let index = 0; index < numCards; index += 1) {
    const key = Math.floor(Math.random() * (size - min) + min);

    const cardInHand = document.createElement('li');
    const cardImg = document.createElement('img');
    const wordImg = document.createElement('p');

    cardInHand.classList.add('player-cards');
    cardInHand.classList.add('my-image-container');
    cardImg.classList.add('my-image');
    wordImg.classList.add('word');
    wordImg.innerText = boardCardDict[key].name;
    cardImg.setAttribute('alt', boardCardDict[key].alt);
    cardImg.style.borderColor = boardCardDict[key].color;
    cardInHand.style.borderColor = boardCardDict[key].color;

    cardInHand.addEventListener('click', () => {
      const card = new Card(
        boardCardDict[key].alt,
        cardList[key].imgSrc,
        boardCardDict[key].name,
        boardCardDict[key].color,
        'handCard',
      );
      card.clicked = true;
      asingValuesToCard(card);
    });

    // adding the img elem to father element
    cardInHand.appendChild(cardImg);
    cardInHand.appendChild(wordImg);

    // Agregar el elemento cardInHand al playerInventory
    playerInventory.appendChild(cardInHand);

    setCardDict(boardCardDict[key], handCardsDict, index, 'handCard');
  }
  // Default setting
  changeImagesToWords();
}

/*
 * Add cards to the board to play
 * based on the cardList object
 */
function addCardToBoard(numCards) {
  const min = 0;
  const size = cardList.length;
  const usedCards = new Set();

  for (let index = 0; index < numCards; index += 1) {
    let key = Math.floor(Math.random() * (size - min) + min);

    if (adp2 === '2A') {
      while (usedCards.has(key)) {
        key = Math.floor(Math.random() * (size - min) + min);
      }
      usedCards.add(key);
    }

    const cardInBoard = document.createElement('li');
    const cardImg = document.createElement('img');
    let card = cardList[key];

    cardInBoard.classList.add('board-image-container');
    cardImg.classList.add('board-image');
    cardImg.src = card.imgSrc;
    cardImg.setAttribute('alt', card.alt);
    cardImg.style.borderColor = randomBorderColor();

    cardImg.onclick = function () {
      card = new Card(
        card.alt,
        cardImg.src,
        card.name,
        cardInBoard.style.borderColor,
      );
      card.clicked = true;
      asingValuesToCard(card);
    };

    cardInBoard.appendChild(cardImg);
    gameBoard.appendChild(cardInBoard);

    setCardDict(card, boardCardDict, index);
  }

  changeImageColors(boardImages, boardCardDict);
}

/*
 * Eliminates letter from words
 */
function cutLettersFromWords() {
  for (let index = 0; index < word.length; index += 1) {
    const wordElement = word[index];
    const originalWord = wordElement.innerText;
    const maxLettersToChange = Math.ceil(originalWord.length / 3);
    const minLettersToChange = 1;

    // Obtener un número aleatorio de letras a cambiar
    const lettersToChange = Math.max(Math.floor(Math.random()
    * (maxLettersToChange - minLettersToChange + 1)) + minLettersToChange, 1);

    // Obtener índices aleatorios para las letras a cambiar
    const indexesToChange = [];
    for (let i = 0; i < originalWord.length; i += 1) {
      indexesToChange.push(i);
    }
    indexesToChange.sort(() => Math.random() - 0.5);

    // Cambiar las letras por "_"
    let modifiedWord = originalWord;
    for (let i = 0; i < lettersToChange; i += 1) {
      const y = indexesToChange[i];
      modifiedWord = `${modifiedWord.substring(0, y)}_${modifiedWord.substring(y + 1)}`;
    }
    wordElement.innerText = modifiedWord;
  }
}
/*
 * More cards effect
 */
function moreCardsEffect() {
  addCardsToMyHand(3);
  cutLettersFromWords();
}
/*
 * update time remaining
 * in current round
 */
function updateTime() {
  let remainingTime = time;
  const x = setInterval(() => {
    remainingTime -= 1;
    const seconds = remainingTime;
    document.getElementById('current-time').innerHTML = `Tiempo: ${seconds}s`;
    if (remainingTime === 10) {
      // check variation of adaptation
      if (adp3 === '3A') {
        moreCardsEffect();
      } else if (adp3 === '3B') {
        applyBlur();
      }
    }
    if (remainingTime <= 0) {
      clearInterval(x);
      document.getElementById('current-time').innerHTML = 'Se acabó';
      dissableBlur();
      TimesUp();
    }
  }, 1000);
}

/*
 * Gathered parameters needed to play
 */
function setGameParams() {
  cardsPerPlayer = sessionStorage.getItem('cardsPerPlayer');
  cardsPerRound = sessionStorage.getItem('cardsPerRound');
  maxTimeRound = sessionStorage.getItem('maxTime');
}

/**
 * When page is loaded...
 */
function loadPage() {
  setGameParams();
  addCardToBoard(cardsPerRound);
  addCardsToMyHand(cardsPerPlayer);
  // check variation of first adaptation
  if (adp1 === '1A') {
    changeImagesToWords();
  } else if (adp1 === '1B') {
    changeImagesToWords();
    cutLettersFromWords();
  }
}

/* *********************** Listeners for page *********************** */

window.addEventListener('load', () => {
  const rankingNickname = document.getElementById('rankingNick');
  console.log(rankingNickname);
  rankingNickname.innerHTML = nickname;
  updateTime();
});
window.addEventListener('load', loadPage);
