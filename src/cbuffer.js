/*

var gen = require('./cbuffer.js');
var cb = gen(1);

*/

var ct = 0;

function GENCBuffer(size){
  return new CBuffer(size);
}

//min_size = 2
function CBuffer(size){
    if (size < 2)
      throw new Error("Need size greater than zero");
    this._size = size;
    this.init = true;
    this.array = [];
    for(var i = 0; i < size; i++){
      this.array.push(null);
    }
    this.r = 0; 
    this.w = 0;
    this.lock = 0;
    this.ct = 0;
    ct++;
}

CBuffer.prototype.toString = function(){
  return "CBuffer";
}

CBuffer.prototype.read = function(){
  //console.log("== read");
  if (this.ct == 0)
    throw new Error("buffer empty");
  var res = this.array[this.r];
  //console.log("current state when reading at", this.r, this.array, res);
  this.r = (this.r + 1)%this._size;
  this.ct--;
  return res;
};

CBuffer.prototype.write = function(obj){
  //console.log("== write");
  //console.log("before", this.r, this.w, this.ct, this._size);
  if (this.ct == this._size){
    this.r = (this.r + 1)%this._size;
  } else {
    this.ct++;
  }
  this.array[this.w] = obj; 
  this.w = (this.w + 1)%this._size; 
  //console.log("after", this.r, this.w, this.ct, this._size);
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

module.exports = GENCBuffer;
