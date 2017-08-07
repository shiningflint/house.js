var expect = require('chai').expect;
var Speaker = require('../speaker');
var Room = require('../room');
var Admin = require('../admin');

describe("Speaker", () => {
  var s, lr, sp;

  before(() => {
    s = new Speaker("Beats");
    lr = new Room("Living Room");
    s.at_room = lr;
    lr.add_object(s);
    s.vup();
  });

  it("raises room noise when volume raises", () => {
    expect(lr.noise).to.equal(1);
  });

  it("raises more noise when more speaker present", () => {
    sp = new Speaker("Audio Technica");
    sp.at_room = lr;
    lr.add_object(sp);
    sp.vup();
    expect(lr.noise).to.equal(2);
  });

  it("updates room noise if moved", () => {
    var admin = new Admin('admin');
    var kitchen =  new Room('Kitchen');
    admin.move_object_to_room(sp, kitchen);
    expect(lr.noise).to.equal(1);
    expect(kitchen.noise).to.equal(1);
    admin.move_object_to_room(s, kitchen);
    expect(lr.noise).to.equal(0);
    expect(kitchen.noise).to.equal(2);
  });
});
