/* eslint-disable class-methods-use-this */
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 8081;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

const sessionList = new Map();
const dictRoom = new Map();
// <roomId, ListPlayers>
const playerList = [];
const roomList = [];
// sessionList.set('id', value);
// sessionList.get('id');

const position = sessionList.length;

class ServerController {
  // constructor() {
  //   this.roomList = [];
  // }

  // instructionReader(instruction, player) {
  //   console.log('inside instructionReader');
  //   if (instruction === 'newGame') {
  //     this.newGame(player);
  //   }
  // }

  /*
  * Controls the newGame request
  * Param: Data with the request info -> playerId, nickname, roomId, role
  */
  newGame(data) {
    // Add info of the player in the session list
    sessionList[data.playerId] = data.nickname;

    // Add player to the room
    if (dictRoom[data.roomId]) {
      const list = dictRoom.get(data.roomId);
      list.push(data.playerId);
    } else {
      const list = [data.playerId];
      dictRoom.set(data.roomId, list);
      roomList.push(data.roomId);
    }

    console.log(`User in room ${data.roomId}: ${dictRoom.get(data.roomId)}`);
  }

  /*
  * Controls the joinRoom request
  * Param: Data with the request info -> playerId, nickname, roomId, role
  */
  joinRoom(data) {
    console.log(`Join to room requested by ${JSON.stringify(data)}`);

    // Adds new player to the list of players
    sessionList[data.playerId] = data.nickname;
    this.addPlayerToRoom(data.roomId, data.playerId);

    console.log(`User in room ${data.roomId}: ${dictRoom.get(data.roomId)}`);
  }

  /*
  * Adds player to the room
  */
  addPlayerToRoom(roomId, playerId) {
    if (dictRoom[roomId]) {
      const list = dictRoom.get(roomId);
      list.push(playerId);
    } else {
      const list = [playerId];
      dictRoom.set(roomId, list);
    }
  }

  /*
  * Return result of roomId check
  */
  checkRoomId(ws, data) {
    let isRoom = false;
    if (roomList[data.roomId]) {
      isRoom = true;
    }
    const message = {
      instruction: 'checkRoomId',
      result: isRoom,
    };

    ws.send(JSON.stringify(message));
  }

  start(ws, roomId) {
    const message = {
      instruction: 'start',
      // list: dictRoom.get(roomId),
      list: sessionList,
    };

    ws.send(JSON.stringify(message));
  }
}

const serverController = new ServerController();

// Code gathered from stackoverflow
// source: https://stackoverflow.com/questions/13364243/websocketserver-node-js-how-to-differentiate-clients
wss.getUniqueID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}`;
};

wss.on('connection', (ws) => {
  // eslint-disable-next-line no-param-reassign
  ws.id = wss.getUniqueID();

  sessionList[position] = ws.id;

  wss.clients.forEach((client) => {
    console.log(`Client.ID: ${client.id}`);
  });

  ws.on('message', (event) => {
    const msg = JSON.parse(event);
    console.log(`event recieved: ${event}`);
    console.log(`event message: ${msg.instruction}`);

    switch (msg.instruction) {
      case 'joinRoom':
        serverController.joinRoom(msg.player);
        break;

      case 'newGame':
        serverController.newGame(msg.player);
        break;

      case 'checkRoomId':
        serverController.checkRoomId(ws, msg.player);
        break;

      case 'start':
        serverController.start(ws, msg.roomId);
        break;

      default:
        console.log(`Error using ${event}`);
        break;
    }
  });
});

wss.on('close', (ws) => {
  console.log(`${ws.id} closed connection`);
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

// export default 'server.js';
