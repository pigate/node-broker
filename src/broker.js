var ct = 0;

/*
to use:

var broker = require('broker.js');
broker.newBuffer(1);

*/

module.exports = {
  newBuffer: function(size){
    ++ct;
    return size;
  },

  activeCount: function(){
    return ct;
  },
  removeOne: function(){
    if (ct > 0) ct--;
    return ct;
  },
  removeAll: function(){
    ct = 0;
    return ct;
  }
};

