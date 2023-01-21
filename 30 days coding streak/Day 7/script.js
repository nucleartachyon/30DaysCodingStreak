Array.prototype.br_search = function (target) 
{
  var half = parseInt(this.length / 2);
  if (target === this[half]) 
  {
    return half;
  }
  if (target > this[half]) 
  {
    return half + this.slice(half,this.length).br_search(target);
  } 
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

l= [1,2,3,4,5,6,7,8,9,10];

console.log(l.br_search(6));