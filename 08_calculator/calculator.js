const add = function(numOne, numTwo) {
  return numOne + numTwo
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo
};

const sum = function([...args]) {
  let newArr = []
  for (let each of args) {
    newArr.push(each)
  }
  if (newArr.length == 0) {
    return 0
  } else if (newArr.length == 1) {
    return newArr[0]
  } else if (newArr.length > 1) {
    let sum = 0
    for (let index = 0; index < newArr.length; index++) {
      sum += newArr[index];
    }
    return sum
  }
};

const multiply = function([...args]) {
  let product = 1
  for (let index = 0; index < args.length; index++) {
    product = product * args[index];
  }
  return product
};

const power = function(numOne, numTwo) {
  let power = 1;
  for (let index = 0; index < numTwo; index++) {
    power = power * numOne
  }
  return power
};

const factorial = function(num) {
  let arr = []
  for (let index = 1; index < num + 1; index++) {
    arr.push(index)    
  }
  let product = 1
  for (let index = 0; index < arr.length; index++) {
    product = product * arr[index];
  }
  return product
};
console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
