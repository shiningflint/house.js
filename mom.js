class Mom {
  constructor(label=undefined, at_room=undefined, tolerance=3, angry=false) {
    this.label = label;
    this.at_room = at_room;
    this.tolerance = tolerance;
    this.angry = angry;
  }

  sense_noise(noise) {
    if(noise > this.tolerance) {
      this.set_angry(true);
    } else {
      this.set_angry(false);
    }
  }

  set_angry(angry) {
    this.angry = angry;
  }
}

module.exports = Mom;
