var assert = require('assert');
var gcb = require('../src/cbuffer.js');

module.exports = {
  'test cbuffer#Init': function(){
    var cb = gcb(1); 
    assert.equal('CBuffer', cb.toString()); 
  },
}
