var expect = require('chai').expect;
var Room = require('../room');
var Speaker = require('../speaker');

describe("Speaker can move", () => {
  before(() => {
    this.s = new Speaker("Boombox");
    this.lr = new Room("Living Room");
    this.s.move_to(this.lr);
  });

  it("To the living room", () => {
    expect(this.s.at_room).to.equal(this.lr);
    expect(this.lr.objects[this.s.label]).to.equal(this.s);
  });

  it("From the living room to the kitchen", () => {
    this.kitchen = new Room("Kitchen");
    this.s.move_to(this.kitchen);
    expect(this.lr.objects[this.s.label]).to.equal(undefined);
    expect(this.kitchen.objects[this.s.label]).to.equal(this.s);
  });
});
