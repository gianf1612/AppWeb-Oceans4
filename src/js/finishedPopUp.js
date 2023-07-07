/* ******************* Creating constants for script ******************* */

// Pop Up that is shown when game is finished.
export const popUpFinished = document.getElementById('popUpFinished');
// Button that allows player to continue session.
export const continueButton = document.getElementById('continue-button');
// Button that allows player to exit session.
export const homeButton = document.getElementById('home-button');

/* ********************* Functions used on script ********************* */

/**
 * Return to waiting room.
 */
export function continueSession() {
  if (popUpFinished && continueButton) {
    window.location.href = './waitingRoom.xhtml';
  }
}

/**
 * Return to the main page.
 */
export function returnToMainPage() {
  if (popUpFinished && homeButton) {
    window.location.href = './index.html';
  }
}

/* *********************** Listeners for buttons *********************** */

continueButton.addEventListener('click', continueSession);
homeButton.addEventListener('click', returnToMainPage);
