const convertToCelsius = function(temp) {
  let tempInC = (5/9*(temp-32))
  return parseFloat(tempInC.toFixed(1))
};
const convertToFahrenheit = function(temp) {
  let tempInF = ((9/5)*temp+32)
  return parseFloat(tempInF.toFixed(1))
};
convertToCelsius(100)
convertToFahrenheit(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
