class Room {
  constructor(name="Random Room", objects={}, noise=0) {
    this.name = name;
    this.objects = objects;
    this.noise = noise;
  }

  update_noise() {
    Object.keys(this.objects).forEach((key) => {
      var value = this.objects[key];
      if(typeof value.volume === "number") {
        this.noise += value.volume;
      }
    });
  }
}

module.exports = Room;
