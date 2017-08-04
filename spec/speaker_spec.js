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
});
