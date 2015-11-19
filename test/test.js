/*
$ expresso ./test.js
*/

var assert = require('assert');
var broker = require('../src/broker.js');

/*
exports['test String#length'] = function(){
  assert.equal(6, 'foobar'.length);
};
*/

module.exports = {
  'test Broker#init': function(){
    assert.equal(0, broker.activeCount());
  },
  
  'test Broker#newBuffer': function(){
    var ct = broker.activeCount();
    broker.newBuffer();
    assert.equal(ct + 1, broker.activeCount());
  },

  'test Broker#removeOne': function(){
    var ct = broker.activeCount();
    broker.newBuffer();
    ct++;
    var id = broker.newBuffer();
    ct++;
    broker.removeOne(id);
    ct--;
    assert.equal(ct, broker.activeCount());
  },
  
  'test Broker#removeAll': function(){
    broker.newBuffer();
    broker.newBuffer();
    broker.newBuffer();
    broker.removeAll();
    assert.equal(0, broker.activeCount());
  },
};
