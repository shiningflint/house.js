class Speaker {
  constructor(label="speaker", at_room=null,volume=0) {
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

  move_to(destination_room) {
    if(this.at_room != destination_room) {
      destination_room.objects[this.label] = this;
      this.leave_room(this.at_room);
      this.at_room = destination_room;
    }
  }

  leave_room(source_room) {
    if (source_room) {
      delete source_room.objects[this.label];
    }
  }
}

module.exports = Speaker;
