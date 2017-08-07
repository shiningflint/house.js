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
    this.broadcast_noise(this.noise, this.objects);
  }

  broadcast_noise(noise, objects) {
    Object.keys(objects).forEach((key) => {
      var value = objects[key];
      if(typeof value.sense_noise === "function") {
        value.sense_noise(noise);
      }
    });
  }
}

module.exports = Room;
