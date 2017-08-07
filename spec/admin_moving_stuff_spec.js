"use strict";
var expect = require('chai').expect;
var Speaker = require('../speaker');
var Room = require('../room');
var Admin = require('../admin');

describe("Admin can move", () => {
  var s, lr, kitchen, admin, sp;

  before(() => {
    s = new Speaker("Boombox");
    lr = new Room("Living Room");
    admin = new Admin("Admin");
    admin.move_object_to_room(s, lr);
  });

  it("speaker to living room", () => {
    expect(lr.objects[s.label]).to.equal(s);
  });

  describe("speaker from living room to", () => {
    before(() => {
      kitchen = new Room("Kitchen");
    });

    it("the kitchen", () => {
      admin.move_object_to_room(s, kitchen);
      expect(kitchen.objects[s.label]).to.equal(s);
      expect(lr.objects[s.label]).to.equal(undefined);
    });

    it("the living room again", () => {
      admin.move_object_to_room(s, lr);
      expect(kitchen.objects[s.label]).to.equal(undefined);
      expect(lr.objects[s.label]).to.equal(s);
    })

    it("move another speaker to the Living Room", () => {
      sp = new Speaker("Audio Technica");
      admin.move_object_to_room(sp, lr);
      admin.move_object_to_room(s, lr);
      expect(kitchen.objects[s.label]).to.equal(undefined);
      expect(lr.objects[s.label]).to.equal(s);
      expect(lr.objects[sp.label]).to.equal(sp);
    });
  });
});
