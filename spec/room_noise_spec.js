var expect = require('chai').expect;
var Speaker = require('../speaker');
var Room = require('../room');

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
});
