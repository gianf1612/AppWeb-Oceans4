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
// Result from server about roomId checking
// eslint-disable-next-line import/no-mutable-exports
export let inputMsgResult = false;

/* ********************* Functions used on script ********************* */

/**
 * Shows code popup when button is pressed.
 */
export function showCodePopUp() {
  popUp.style.display = 'flex';
}

export function getInputRoomCode() {
  return popupInput.value;
}

export function inputResult(result) {
  this.inputMsgResult = result;
}

/**
 * Verifies if given code is correct
 */
// export function verifyCode() {
//   const msg = document.getElementById('room-validation-text');
//   // if (popupInput.value !== '1234') {
//   // if (!listRooms[popupInput.value]) {
//   if (inputMsgResult == false) {
//     msg.innerHTML = 'Sala no existe';
//     joinButton.style.cursor = 'pointer';
//     joinButton.disabled = true;
//   } else {
//     msg.innerHTML = 'Sala encontrada';
//     joinButton.style.cursor = 'default';
//     joinButton.disabled = false;
//   }
//   return popupInput.value;
// }

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
  // verifyCode();
  joinButton.disabled = false;
  // eslint-disable-next-line eqeqeq
  if (popupInput.value !== '') {
    const msg = document.getElementById('room-validation-text');
    msg.innerHTML = 'Sala encontrada';
    joinButton.style.cursor = 'default';
    joinButton.disabled = false;
    sessionStorage.setItem('roomID', popupInput.value);
    sessionStorage.setItem('typeUser', 'user');
    window.location.href = './waitingRoom.xhtml';
  } else {
    console.log('error in join Room');
  }
}

/* *********************** Listeners for buttons *********************** */
if (showPopUpButton) {
  showPopUpButton.addEventListener('click', showCodePopUp);
}
if (cancelButton) {
  cancelButton.addEventListener('click', cancelPopUp);
}
// if (joinButton) {
//   joinButton.addEventListener('click', joinRoom);
// }
// if (popupInput) {
//   popupInput.addEventListener('input', verifyCode);
// }
export default 'codePopUp.js';
