"use strict";
var expect = require('chai').expect;
var Mom = require('../mom');
var Room = require('../room');
var Admin = require('../admin');

describe("Mom", () => {
  var mom, lr, kitchen, admin;

  before(() => {
    mom = new Mom("Liz");
    lr = new Room("Living Room");
    kitchen = new Room("Kitchen");
    admin = new Admin("admin");
    admin.move_object_to_room(mom, lr);
  });

  it("can move to the living room", () => {
    expect(mom.at_room).to.equal(lr);
    expect(lr.objects[mom.label]).to.equal(mom);
  });

  it("can move to the kitchen", () => {
    admin.move_object_to_room(mom, kitchen);
    expect(mom.at_room).to.equal(kitchen);
    expect(lr.objects[mom.label]).to.equal(undefined);
    expect(kitchen.objects[mom.label]).to.equal(mom);
  });

  it("can be moved by admin back to living room", () => {
    admin.move_object_to_room(mom, lr);
    expect(mom.at_room).to.equal(lr);
    expect(lr.objects[mom.label]).to.equal(mom);
    expect(kitchen.objects[mom.label]).to.equal(undefined);
  });
})
