/* ******************* Creating constants for script ******************* */

// Button to show the codePopUp
export const showPopUpButton = document.getElementById('show-popup-button');
// Button that allows player to close pop up.
export const cancelButton = document.getElementById('cancel-button');
// Input box inside popup
export const popupInput = document.getElementById('popup-input');
// Button in codePopUp to join into a room
export const joinButton = document.getElementById('join-button');
// Pop Up that is shown when player decides to join session.
export const popUp = document.getElementById('popup-code');
// Input of the code popUp
export const codeInput = document.getElementById('popUpInput');
// Code popUp input message result
export const inputMsg = document.getElementById('msgCode');

/* ********************* Functions used on script ********************* */

/**
 * Shows code popup when button is pressed.
 */
export function showCodePopUp() {
  popUp.style.display = 'flex';
}

/**
 * Verifies if given code is correct
 */
export function verifyCode() {
  const msg = document.getElementById('room-validation-text');
  if (popupInput.value !== '1234') {
    msg.innerHTML = 'Sala no existe';
    joinButton.style.cursor = 'pointer';
    joinButton.disabled = true;
  } else {
    msg.innerHTML = 'Sala encontrada';
    joinButton.style.cursor = 'default';
    joinButton.disabled = false;
  }
}

/**
 * Closes popup when button is clicked.
 */
export function cancelPopUp() {
  popUp.style.display = 'none';
  document.getElementById('popup-input').value = '';
  document.getElementById('room-validation-text').innerHTML = '';
}

/**
 * Joins given room when button is clicked.
 */
export function joinRoom() {
  if (joinButton) {
    // code validation
    window.location.href = './waitingRoom.xhtml';
  }
}

/* *********************** Listeners for buttons *********************** */
if (showPopUpButton) {
  showPopUpButton.addEventListener('click', showCodePopUp);
}
if (cancelButton) {
  cancelButton.addEventListener('click', cancelPopUp);
}
if (joinButton) {
  joinButton.addEventListener('click', joinRoom);
}
if (popupInput) {
  popupInput.addEventListener('input', verifyCode);
}
export default 'codePopUp.js';
