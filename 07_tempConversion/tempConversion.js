const convertToCelsius = function (t) {
  let converted = (t - 32) * (5 / 9);
  //the below handles precision -- we only return the conversion with 1 digit
  //of precision if the conversion is NOT a whole number. This is kinda dumb
  //imo but we have to pass the tests so...
  return converted % 1 == 0 ? converted : Number(converted.toFixed(1));
};

const convertToFahrenheit = function (t) {
  let converted = t * (9 / 5) + 32;
  return converted % 1 == 0 ? converted : Number(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
