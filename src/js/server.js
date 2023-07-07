const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 8081;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

const sessionList = new Map();
const dictRoom = new Map();
const playerList = [];
// sessionList.set('id', value);
// sessionList.get('id');

const position = sessionList.length;

class ServerController {
  // constructor(){}

  /*
  * Controls the newGame request
  * Param: Data with the request info -> playerId, nickname, roomId, role
  */
  newGame(data) {
    console.log(`New game requested by ${JSON.stringify(data)}`);
    console.log(`data.playerId ${data.playerId}`);
    console.log(`data.nickname ${data.nickname}`);
    console.log(`data.roomID ${data.roomId}`);

    // Add info of the player in the session list
    sessionList[data.playerId] = data.nickname;

    // Add player to the room
    if (dictRoom[data.roomId]) {
      const list = dictRoom.get(data.roomId);
      list.push(data.playerId);
    } else {
      const list = [data.playerId];
      dictRoom.set(data.roomId, list);
    }

    console.log(`Dictionary of rooms: ${dictRoom.get(data.roomId)}`);
  }

  /*
  * Controls the joinRoom request
  * Param: Data with the request info -> playerId, nickname, roomId, role
  */
  joinRoom(data) {
    console.log(`New game requested by ${JSON.stringify(data)}`);

    // Adds new player to the list of players
    sessionList[data.playerId] = data.nickname;
    this.newGame(data);
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

    if (serverController[msg.instruction]) {
      console.log(`event recieved: ${event}`);
      console.log(`event message: ${msg.instruction}`);
      serverController[msg.instruction](msg.player);
    } else {
      // Error handler
      console.log(`Error using ${event}`);
    }
  });
});

wss.on('close', (ws) => {
  console.log(`${ws.id} closed connection`);
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
