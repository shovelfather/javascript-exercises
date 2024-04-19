const sumAll = function (x, y) {
  if (x <= 0 || y <= 0 || !Number.isInteger(x) || !Number.isInteger(y))
    return "ERROR";
  let lower = Math.min(x, y);
  let upper = Math.max(x, y);
  let sum = 0;

  for (i = lower; i < upper + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
