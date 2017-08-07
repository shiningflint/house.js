var expect = require('chai').expect;
var Speaker = require('../speaker');

describe("Speaker is in check", () => {
  it("Has the correct label & volume", () => {
    var s = new Speaker("Boom!");
    expect(s.label).to.equal("Boom!");
    s.vup();
    s.vup();
    expect(s.volume).to.equal(2);
    s.vdown();
    expect(s.volume).to.equal(1);
  });

  it("max volume 10 & min volume 0", () => {
    var s = new Speaker("Beats");
    var sp = new Speaker("ATH");
    s.volume = 10;
    sp.volume = 0;
    s.vup();
    sp.vdown();
    expect(s.volume).to.equal(10);
    expect(sp.volume).to.equal(0);
  });
});
