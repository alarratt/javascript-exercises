const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(test) {
	return test.reduce((total, member) => total+member,0)
};

const multiply = function(array) {
  return array.reduce((total, member)=> total*member,1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n==0){
    return 1
  }
  let product = 1;
  for (let index = n; index > 0; index--) {
    product *= index;
    
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
