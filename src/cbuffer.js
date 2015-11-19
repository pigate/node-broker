/*

require('./cbuffer.js');
var cb = new CBuffer(1);

*/

var ct = 0;

function GENCBuffer(size){
  return new CBuffer(size);
}


function CBuffer(size){
    if (size < 2)
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

CBuffer.prototype.read = function(){
    if (this.start == this.end)
      throw new Error("buffer empty");
    var res = this.array[this.start];
    this.start = (this.start + 1)%this._size;
    console.log(this.array);
    return res;
};

CBuffer.prototype.write = function(obj){
    this.array[this.end] = obj; 
    this.end = (this.end + 1)%this._size; 
    if (this.end == this.start){
      this.start = (this.start + 1)%this._size;
    }
    console.log("hi", this.end, this.start, this._size);
}

/*
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
