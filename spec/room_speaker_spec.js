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

  it("Not to the same room", () => {
    this.s.move_to(this.lr);
    expect(Object.keys(this.lr.objects).length).to.equal(1);
    expect(this.s.at_room).to.equal(this.lr);
    expect(this.lr.objects[this.s.label]).to.equal(this.s);
  });

  describe("From the living room", () => {
    before(() => {
      this.kitchen = new Room("Kitchen");
      this.s.move_to(this.kitchen);
    });

    it("To the kitchen", () => {
      expect(this.lr.objects[this.s.label]).to.equal(undefined);
      expect(this.kitchen.objects[this.s.label]).to.equal(this.s);
    });

    it("Not to the same kitchen", () => {
      this.s.move_to(this.kitchen);
      expect(Object.keys(this.kitchen.objects).length).to.equal(1);
      expect(Object.keys(this.lr.objects).length).to.equal(0);
      expect(this.lr.objects[this.s.label]).to.equal(undefined);
      expect(this.kitchen.objects[this.s.label]).to.equal(this.s);
    });
  });
});

describe("Speaker controls noise", () => {
  before(() => {
    this.sp = new Speaker("Audio Technica");
    this.br = new Room("Bed Room");

    this.sp.move_to(this.br);
    this.sp.vup();
  });

  it("up when volume up", () => {
    expect(this.br.noise).to.equal(1);
  });

  it("down when volume down", () => {
    this.sp.vup();
    this.sp.vdown()
    expect(this.br.noise).to.equal(1);
  });

  it("updates room noise when moved", () => {
    this.toilet = new Room("Toilet");
    this.sp.vup();
    this.sp.move_to(this.toilet);
    expect(this.br.noise).to.equal(0);
    expect(this.toilet.noise).to.equal(2);
  });
});
