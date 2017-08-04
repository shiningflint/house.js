var expect = require('chai').expect;
var Speaker = require('../speaker');

var s = new Speaker("Boom!");
console.log(s);
expect(s.label).to.equal("Boom!");
s.vup();
s.vup();
console.log(s);
expect(s.volume).to.equal(2);
s.vdown();
expect(s.volume).to.equal(1);
