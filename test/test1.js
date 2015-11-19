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
  'test cbuffer#WriteRead': function(){
    var cb = gcb(2);
    cb.write('hi1');
    cb.write('hi2');
    assert.equal('hi1', cb.read());
    assert.equal('hi2', cb.read());
    cb.write('hi3');
    assert.equal('hi3', cb.read());
  },
  'test cbuffer#OverFlow': function(){
    console.log("Testing Overflow");
    var cb = gcb(2);
    cb.write('1');
    cb.write('2');
    cb.write('3');
    assert.equal('2', cb.read());
    assert.equal('3', cb.read());
  },
}
