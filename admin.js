class Admin {
  constructor(name="Admin") {
    this.name = name;
  }

  move_object_to_room(object, destination_room) {
    if (object.label && object.at_room != destination_room) {
      destination_room.add_object(object);
      if(object.at_room != undefined) {
        object.at_room.remove_object(object);
      }
      object.at_room = destination_room;
    }
  }
}

module.exports = Admin;
