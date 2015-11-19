var id_length = 5;
var ct = 0;
var bufMap = {};
var genBuffer = require('./cbuffer.js');

function randId(size){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < size; i++){
    text += possible.charAt(Math.floor(Math.random()*possible.length)); 
  } 
  return text;
}
/*
to use:

var broker = require('broker.js');
broker.newBuffer(1);

*/

module.exports = {
  newBuffer: function(size){
    var cbuf = genBuffer(size);
    var rand_id = randId(id_length);
    bufMap[rand_id] = cbuf;
    ++ct;
    return rand_id;
  },
  activeCount: function(){
    return ct;
  },
  removeOne: function(id){
    if (id == null || id == undefined) return;
    if (id in bufMap){
      delete bufMap[id];
      ct--;
    } else throw new Error("key does not exist");
  },
  removeAll: function(){
    var keys = Object.keys(bufMap);
    for(var i = 0; i < keys.length; i++){
      delete bufMap[keys[i]];
    }
    ct = 0;
  },

};

