/* ******************* Imports ******************* */
import * as codePopup from './codePopUp.js';
/* ******************* Creating constants for script ******************* */

// Text field to enter player nickname.
const nicknameField = document.getElementById('nickname');
// Button to create a room after entering a nickname.
export const createRoomBtn = document.getElementById('create-room-button');
// Button to join a room after entering a nickname.
export const joinRoomBtn = document.getElementById('show-popup-button');
// Button to join after entering the roomId
export const joinRoomCodePopUpBtn = document.getElementById('join-button');
// Button that changes tab to credits.
const creditsButton = document.getElementById('credits-link');
// Credits tab content.
const creditsContent = document.getElementById('credits');
// Button that changes tab to ranking.
const rankingButton = document.getElementById('ranking-link');
// Ranking tab content.
const rankingContent = document.getElementById('ranking');
// Button that changes tab to instructions.
const instructionsButton = document.getElementById('instructions-link');
// Instructions tab content.
const instructionsContent = document.getElementById('instructions');
// Nickname validation message.
const nicknameValidation = document.getElementById('nickname-validation');
/* ********************* Functions used on script ********************* */

/**
 * Lock or enable create room and join room buttons after entering a nickname.
 */

function enableButtons() {
  /* if nick is small enough, pass */
  if (nicknameField.value.length < 10 && nicknameField.value.trim() !== '') {
    joinRoomBtn.disabled = false;
    createRoomBtn.disabled = false;
    createRoomBtn.style.cursor = 'pointer';
    joinRoomBtn.style.cursor = 'pointer';
    nicknameValidation.style.visibility = 'hidden';
  } else {
    /* if nick is too big block */
    createRoomBtn.disabled = true;
    joinRoomBtn.disabled = true;
    createRoomBtn.style.cursor = 'default';
    joinRoomBtn.style.cursor = 'default';
    nicknameValidation.style.visibility = 'visible';
    nicknameValidation.style.display = 'flex';
    nicknameValidation.innerHTML = 'El apodo es muy grande';
  }
}

function generateUniqueID() {
  // Obtener la marca de tiempo actual
  // const timestamp = new Date().getTime();

  // Generar un número aleatorio de 5 dígitos
  // const randomNum = Math.floor(Math.random() * 100000);
  const randomNum = Math.floor(Math.random() * 1000);

  // Concatenar la marca de tiempo y el número aleatorio
  // const uniqueID = `${timestamp}${randomNum}`;
  const uniqueID = `${randomNum}`;
  return uniqueID;
}

/*
 * Generates an unique id for the game room
 */
function createRoomId() {
  const date = new Date();
  const time = date.getTime().toString();
  const timestamp = time.slice(-4);
  const randomNum = Math.floor(Math.random() * 1000);
  return `${timestamp}${randomNum}`;
}

/*
 * Add the roomId into the waitingRoom page
 */
export function showRoomId(value) {
  let paragraph = document.getElementById('waiting-room-title').innerHTML;
  paragraph += `#${value}`;
  console.log(paragraph);
  document.getElementById('waiting-room-title').innerHTML = paragraph;
}

export function roomIdInput() {
  return codePopup.getInputRoomCode();
}

/*
* Gathered info of the user joining to a session
*/
export function joinSession() {
  const nickname = document.getElementById('nickname').value;
  const userID = generateUniqueID();
  const roomID = createRoomId();
  return { nickname, userID, roomID };
}

/*
 * Send a message to the server to create a new room with the host as the client
 * that pressed the create room button and with the nickname entered.
 */
export function createSession() {
  const nickname = document.getElementById('nickname').value;
  const userID = generateUniqueID();
  const roomID = createRoomId();

  // save data on sessionStorage
  sessionStorage.setItem('id', userID);
  sessionStorage.setItem('nickname', nickname);
  sessionStorage.setItem('roomID', roomID);
  
  // Builds URL with userID, roomID and nickname
  const link = `waitingRoom.xhtml?id=${userID}&nickname=${encodeURIComponent(nickname)}&roomID=${roomID}`;
  window.location.href = link;

  return { nickname, roomID };
}

/*
 * Sends a message to the server to close a client's connection.
 */
function closeTab() {
  // "Type": "closeTab",
  // "From": "client",
  // "To": "server",
  // "When": "when a client logs off"
}

/**
 * Shows credits tab.
 */
function showCredits() {
  if (creditsButton) {
    creditsContent.style.display = 'flex';
    rankingContent.style.display = 'none';
    instructionsContent.style.display = 'none';
  }
}

/**
 * Shows ranking tab.
 */
function showRanking() {
  if (rankingButton) {
    creditsContent.style.display = 'none';
    rankingContent.style.display = 'flex';
    instructionsContent.style.display = 'none';
  }
}

/**
 * Shows instructions tab.
 */
function showInstructions() {
  if (instructionsButton) {
    creditsContent.style.display = 'none';
    rankingContent.style.display = 'none';
    instructionsContent.style.display = 'flex';
  }
}

/* *********************** Listeners for page *********************** */
if (nicknameField) {
  nicknameField.addEventListener('input', enableButtons);
}
// createRoomBtn.addEventListener('click', createSession);
if (creditsButton) {
  creditsButton.addEventListener('click', showCredits);
}
if (rankingButton) {
  rankingButton.addEventListener('click', showRanking);
}
if (instructionsButton) {
  instructionsButton.addEventListener('click', showInstructions);
}
export default 'index.js';
