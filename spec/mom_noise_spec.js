"use strict";
var expect = require('chai').expect;
var Mom = require('../mom');
var Room = require('../room');
var Speaker = require('../speaker');
var Admin = require('../admin');

describe("Mom_Noise", () => {
  var s, mom, lr, admin, kitchen;

  before(() => {
    s = new Speaker("Boombox");
    mom = new Mom("Liz");
    lr = new Room("Living Room");
    kitchen = new Room("Kitchen");
    admin = new Admin("admin");
  });

  it("gets angry if it's noisy", () => {
    s.volume = 3;
    admin.move_object_to_room(s, lr);
    admin.move_object_to_room(mom, lr);
    expect(mom.angry).to.equal(false);
    s.vup();
    expect(mom.angry).to.equal(true);
    s.vdown();
    expect(mom.angry).to.equal(false);
    s.vup();
    admin.move_object_to_room(mom, kitchen);
    expect(mom.angry).to.equal(false);
    admin.move_object_to_room(s, kitchen);
    expect(mom.angry).to.equal(true);
  });
});
