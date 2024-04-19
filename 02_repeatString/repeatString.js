const repeatString = function(stringToRepeat, timesToRepeat) {
  if (timesToRepeat < 0) { return "ERROR"; }
  let outputString = "";
  for (i = 0; i < timesToRepeat; i++) {
    outputString = outputString + stringToRepeat;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
