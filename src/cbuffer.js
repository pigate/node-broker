/*

require('./cbuffer.js');
var cb = new CBuffer(1);

*/

var ct = 0;

function GENCBuffer(size){
  return new CBuffer(size);
}


function CBuffer(size){
    if (size <= 0)
      throw new Error("Need size greater than zero");
    this._size = size;
    this.init = true;
    this.array = [];
    for(var i = 0; i < size; i++){
      this.array.push(null);
    }
    this.start = 0; 
    this.end = 0;
    this.lock = 0;
    ct++;
}

CBuffer.prototype.toString = function(){
  return "CBuffer";
}

/*
CBuffer.prototype.read = function(){
  if (this.start == this.end)
    throw new Error("buffer empty");
  var res = array[start];
  this.start = (this.start + 1)%this._size;
  return res;
}

CBuffer.prototype.write = function(obj){
  if ((this.end + 1) % this._size) == this.start){
    this.start = (this.start + 1)%this._size;
  }
  this.end = (this.end + 1)%this._size; 
  this.array[end] = obj; 
}

CBuffer.prototype.lock = function(){
  if (this.lock == 1)
    throw new Error("already locked!");
  this.lock = 1;
}

CBuffer.prototype.unlock = function(){
  if (this.lock == 0)
    throw new Error("already unlocked!");
  this.lock = 0;
}
*/

module.exports = GENCBuffer;
