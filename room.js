class Room {
  constructor(name="Random Room", objects={}, noise=0) {
    this.name = name;
    this.objects = objects;
    this.noise = noise;
  }

  add_object(object) {
    if (object.label) {
      this.objects[object.label] = object;
    }
    this.update_noise();
  }

  remove_object(object) {
    if (object.label) {
      delete this.objects[object.label];
    }
    this.update_noise();
  }

  update_noise() {
    this.noise = 0;
    Object.keys(this.objects).forEach((key) => {
      var value = this.objects[key];
      if(typeof value.volume === "number") {
        this.noise += value.volume;
      }
    });
  }
}

module.exports = Room;
