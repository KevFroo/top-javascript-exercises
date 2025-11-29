const convertToCelsius = function(temperature) {
  return Number.parseFloat(((temperature - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  return Number.parseFloat(((temperature * (9 / 5)) + 32).toFixed(1));  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
