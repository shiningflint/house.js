class Speaker {
  constructor(label="speaker", at_room=undefined,volume=0) {
    this.label = label;
    this.at_room = at_room;
    this.volume = volume;
  }

  vup() {
    this.volume += 1;
    if(this.at_room) {
      this.at_room.update_noise();
    }
  }

  vdown() {
    this.volume -= 1;
    if(this.at_room) {
      this.at_room.update_noise();
    }
  }
}

module.exports = Speaker;
