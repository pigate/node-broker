var assert = require('assert');
var broker = require('../src/broker.js');

describe('Broker', function(){
  describe('#init()', function(){
    it('should ini. with active ct 0', function(){
      assert.equal(0, broker.activeCount());
    });
  });
  describe('#newBuffer()', function(){
    it('should increment active ct by 1', function(){
      var ct = broker.activeCount();
      broker.newBuffer();
      assert.equal(ct + 1, broker.activeCount());
    });
  });
  describe('#removeOne(id)', function(){
    it('should remove valid buffer and decrement active ct by 1', function(){
      var ct = broker.activeCount();
      broker.newBuffer();
      ct++;
      var id = broker.newBuffer();
      ct++;
      broker.removeOne(id);
      ct--;
      assert.equal(ct, broker.activeCount());
    });
  });
  describe('#removeAll()', function(){
    it('should remove all buffers and active ct = 0', function(){
      broker.newBuffer();
      broker.newBuffer();
      broker.newBuffer();
      broker.removeAll();
      assert.equal(0, broker.activeCount());
    });
  });
});
