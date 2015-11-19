var assert = require('assert');
var gcb = require('../src/cbuffer.js');

module.exports = {
  'test cbuffer#Init': function(){
    var cb = gcb(2); 
    assert.equal('CBuffer', cb.toString()); 
  },
  'test cbuffer#Write': function(){
    var cb = gcb(2);
    cb.write('hi');
    assert.equal('hi', cb.read());
  },
}
