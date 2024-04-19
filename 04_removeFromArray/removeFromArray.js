const removeFromArray = function(array, ...itemsToRemove) {
  let filteredArray = [];
  array.forEach(item => {
    if (!itemsToRemove.includes(item)) { filteredArray.push(item); }
  });
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
