class Speaker {
  constructor(label="speaker", at_room=null,volume=0) {
    this.label = label;
    this.at_room = at_room;
    this.volume = volume;
  }

  vup() {
    this.volume += 1;
  }

  vdown() {
    this.volume -= 1;
  }
}

module.exports = Speaker;
