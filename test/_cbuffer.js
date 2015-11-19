var assert = require('assert');
var gcb = require('../src/cbuffer.js');

describe('CBuffer', function(){
  describe('#init()', function(){
    it('should init buffer safely with size 2', function(){
      var cb = gcb(2);
      assert.equal('CBuffer', cb.toString());
    });
  });
  describe('#Write', function(){
    it('should read what is written on first attempt', function(){
      var cb = gcb(2);
      cb.write('hi');
      assert.equal('hi', cb.read());
    });
  });
  describe('#WriteRead', function(){
    it('should be able to wrap the write safely', function(){
      var cb = gcb(2);
      cb.write('hi1');
      cb.write('hi2');
      assert.equal('hi1', cb.read());
      assert.equal('hi2', cb.read());
      cb.write('hi3');
      assert.equal('hi3', cb.read());
    });
  });
  describe('#OverFlow', function(){
    it('should be able to wrap the write to overflow the reads', function(){
      console.log("Testing Overflow");
      var cb = gcb(2);
      cb.write('1');
      cb.write('2');
      cb.write('3');
      assert.equal('2', cb.read());
      assert.equal('3', cb.read());
    });
  });
});

