import * as index from './index.js';
import * as codePopUp from './codePopUp.js';
import Player from './player.js';

// window.addEventListener('load', main);

// // Main controls calls for events
// function main() {
//   // create new socket
//   let socket = new WebSocket('ws://localhost:8081');

//   socket.addEventListener('open', () => {
//     console.log('Connected to server');
//     // console.log(index.createRoomBtn);
//     // console.log(index);
//   });
// }

class ClientController {
  showRoomId(value) {
    let paragraph = document.getElementById('waiting-room-title').innerHTML;
    paragraph += `#${value}`;
    console.log(paragraph);
    document.getElementById('waiting-room-title').innerHTML = paragraph;
  }
}

const socket = new WebSocket('ws://localhost:8081');
const clientController = new ClientController();

socket.addEventListener('open', () => {
  console.log('Connected to server');
  // console.log(index.createRoomBtn);
  // console.log(index);
});

socket.addEventListener('message', (event) => {});

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

      // index.showRoomId(roomID);
      clientController.showRoomId(info.roomID);

      // Create player
      const player = new Player(info.nickname, 'admin');

      const message = {
        instruction: 'newGame',
        // name: info,
        player,
      };
      console.log(`createRoomBtn message: ${message}`);
      const text = JSON.stringify(message);

      // Sends message to server
      socket.send(text);
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

// User joining to a room
if (codePopUp.joinButton) {
  codePopUp.joinButton.addEventListener('click', (event) => {
    if (event.target.id === 'join-button') {
      const sessionData = index.createSession();

      // Create player
      const player = new Player(sessionData.nickname);

      const message = {
        instruction: 'joinRoom',
        name: sessionData.info,
        player,
      };

      socket.send(JSON.stringify(message));
    }
  });
}

// window.addEventListener('load', main);

export default 'client.js';
