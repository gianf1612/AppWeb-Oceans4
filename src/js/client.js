import * as index from './index.js';
import * as codePopUp from './codePopUp.js';
import Player from './player.js';
import * as waitingRoom from './waitingRoom.js';

const socket = new WebSocket('ws://localhost:8081');

socket.addEventListener('open', () => {
  console.log('Connected to server');
  // console.log(index.createRoomBtn);
  // console.log(index);
});

/*
* Handles all the messages from the server
*/
socket.addEventListener('message', (event) => {
  const msg = JSON.parse(event);

  switch (msg.instruction) {
    case 'checkRoomId':
      codePopUp.inputResult(msg.result);
      break;

    case 'start':
      startGame(msg.result);
      break;

    default:
      console.log(`Error using ${event}`);
      break;
  }
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server');
});

socket.addEventListener('error', (event) => {
  console.log(`WebSocket error: ${event}`);
});

// When createRoom pressed
// Checks btn exists
if (index.createRoomBtn) {
  // Adds click event
  index.createRoomBtn.addEventListener('click', (event) => {
    if (event.target.id === 'create-room-button') {
      const info = index.createSession();

      console.log(`Info recieved from client's side: ${info}`);

      // Create player
      const player = new Player(info.nickname, 'admin');
      player.roomId = info.roomID;

      const message = {
        instruction: 'newGame',
        player,
      };
      console.log(`createRoomBtn message: ${message}`);

      // Sends message to server
      socket.send(JSON.stringify(message));
    }
  });
}

// When joinRoom pressed
if (index.joinRoomBtn) {
  // Adds click event
  index.joinRoomBtn.addEventListener('click', (event) => {
    if (event.target.id === 'show-popup-button') {
      codePopUp.showCodePopUp();
    }
  });
}

// codePopUp window functions
if (codePopUp.cancelButton) {
  // Adds click event
  codePopUp.cancelButton.addEventListener('click', (event) => {
    // close popUp
    if (event.target.id === 'cancel-button') {
      codePopUp.cancelPopUp();
    }
  });
}

/*
 * Checks if roomId typed exits
 */
function validateRoomId(roomId, connection) {
  console.log(`Requested to check the roomId ${roomId}`);
  const player = new Player(null, 'user', roomId);
  const message = {
    instruction: 'checkRoomId',
    player,
  };

  connection.send(JSON.stringify(message));
}

// User joining to a room
if (codePopUp.joinButton) {
  codePopUp.joinButton.addEventListener('click', (event) => {
    if (event.target.id === 'join-button') {
      // const sessionData = index.createSession();
      const sessionData = index.joinSession();

      // retrieve the roomId typed
      const input = index.roomIdInput();

      // validates with the server if roomId exits
      validateRoomId(input, socket);
      // const roomId = codePopUp.joinRoom();

      // Create player
      const player = new Player(sessionData.nickname);
      player.roomId = input;

      const message = {
        instruction: 'joinRoom',
        name: sessionData.info,
        player,
      };

      console.log(`message to sent ${message}`);

      socket.send(JSON.stringify(message));

      codePopUp.joinRoom();
    }
  });
}

if (waitingRoom.startButton) {
  waitingRoom.startButton.addEventListener('click', (event) => {
    if (event.target.id === 'start-button') {
      const message = {
        instruction: 'start',
        roomId: waitingRoom.sessionStorage.getItem('roomID'),
      };

      console.log(`message to sent ${message}`);

      socket.send(JSON.stringify(message));
    }
  });
}

function startGame(list) {
  list.forEach((player) => {
    console.log(`Player ${player}`);
    player.waitingRoom.startGame();
  });
}

// window.addEventListener('load', main);

export default 'client.js';
