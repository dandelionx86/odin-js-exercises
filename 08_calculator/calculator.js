// Computes the sum of two numbers.
const add = function(num1, num2) {
  return num1 + num2;	
};

// Computes the difference of two numbers.
const subtract = function(num1, num2) {
  return num1 - num2;
};

// Computes the sum of numbers in an array.
const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; 
};

// Multiplies numbers in an array.
const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]
  }
  return total;
};

// Raises one number to the power of another number.
const power = function(num1, num2) { 
  return Math.pow(num1, num2);
};

// Computes the factorial of a number.
const factorial = function(n) {
	if ((n === 0 || n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
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
