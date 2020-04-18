Array.prototype.take = function (count = 10) {
  this.splice(count);
  //   console.log(this);
  return this;
};
