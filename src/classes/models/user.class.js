class User {
  constructor(id, socket) {
    this.id = id;
    this.socket = socket;
    this.x = 0;
    this.y = 0;
    this.lastUpdateTime = Date.now();
  }

  updatePostion(x, y) {
    this.x = x;
    this.y = y;
    this.lastUpdateTime = Date.now();
  }
}

export default User;