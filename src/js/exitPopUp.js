/* ******************* Creating constants for script ******************* */

// Pop Up that is shown when player decides to join session.
export const exitPopUp = document.getElementById('exit-popup');
// Button that allows player to close pop up.
export const cancelButton = document.getElementById('cancel-button');
// Button that allows player to return to main page.
export const acceptButton = document.getElementById('accept-button');
// Button that allows the user to see the exit popup.
export const exitButton = document.getElementById('exit-button');

/* ********************* Functions used on script ********************* */

/**
 * Close Pop Up.
 */
export function closePopUp() {
  if (exitPopUp && cancelButton) {
    exitPopUp.style.display = 'none';
  }
}

/**
 * Show Pop Up.
 */
export function showExitPopup() {
  if (exitPopUp && exitButton) {
    exitPopUp.style.display = 'flex';
  }
}

/* Function: Accept
 * return to home page when clicked */
export function accept() {
  if (acceptButton) {
    window.location.href = './index.html';
  }
}

/* *********************** Listeners for buttons *********************** */

cancelButton.addEventListener('click', closePopUp);
exitButton.addEventListener('click', showExitPopup);
acceptButton.addEventListener('click', accept);
