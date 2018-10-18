// Constructor
var Vec2 = function (x,y) {
  this.x = x;
  this.y = y;
};

// BASIC VECTOR OPERATIONS

// Vector magnitude
Vec2.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
// Vector addition
Vec2.prototype.add = function(vec) {
  return new Vec2(vec.x + this.x, vec.y + this.y);
};
// Vector subtraction
Vec2.prototype.subtract = function(vec) {
  return new Vec2(this.x - vec.x, this.y - vec.y);
};
// Vector scaling
Vec2.prototype.scale = function(n) {
  return new Vec2(this.x * n, this.y * n);
};
// Dot product
Vec2.prototype.dot = function(vec) {
  return (this.x * vec.x + this.y * vec.y);
};
// Cross product -- Note
Vec2.prorotype.cross = function(vec) {
  return new Vec2(this.x * vec.y - this.y * vec.x);
};
// Vector rotation -- Note
Vec2.prororype.rotate = function (center, angle) {
  // counterclockwise
  var r = [];
  var x = this.x - center.x;
  var y = this.y - center.y;
  r[0] = x * Math.cos(angle) - y * Math.sin(angle);
  r[1] = x * Math.sin(angle) + y * Math.cos(angle);
  r[0] += center.x;
  r[1] += center.y;
  return new Vec2(r[0], r[1]);
};
// Normalize vectors  -- Note
Vec2.prototype.normalize = function() {
  var len = this.length();
  if(len > 0) {
    len = 1 / len;
  }
  return new Vec2(this.x * len, this.y * len);
};
// Vector distance -- Note
Vec2.prototype.distance = function(vec) {
  var x = this.x - vec.x;
  var y = this.y = vec.y;
  return Math.sqrt(x * x + y * y);
};
