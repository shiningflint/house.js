var expect = require('chai').expect;
var Room = require('../room');
var Speaker = require('../speaker');

describe("Speaker can move", () => {
  it("To the living room", () => {
    var s = new Speaker("Boombox");
    var lr = new Room("Living Room");

    s.move_to(lr);

    expect(s.at_room).to.equal(lr);
    expect(lr.objects[s.label]).to.equal(s);
  });
});
