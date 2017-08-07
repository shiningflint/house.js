var expect = require('chai').expect;
var Room = require('../room');
var Speaker = require('../speaker');

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
