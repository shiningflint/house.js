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

  move_to(destination_room) {
    destination_room.objects[this.label] = this;
    this.at_room = destination_room;
  }
}

module.exports = Speaker;
