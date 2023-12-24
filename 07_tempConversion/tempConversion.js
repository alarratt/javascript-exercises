const convertToCelsius = function(tempF) {
  let tempC = Math.round(10*(tempF - 32)*5/9)/10;
  return(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF = Math.round(10*((tempC*9/5)+32))/10;
  return(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
