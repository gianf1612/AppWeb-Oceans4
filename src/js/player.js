class Player {
  constructor(nickname, role = 'user', roomID = null) {
    this.playerId = this.getUniqueID();
    this.nickname = nickname;
    this.roomId = roomID;
    this.role = role;
  }

  // eslint-disable-next-line class-methods-use-this
  getUniqueID = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export default Player;
