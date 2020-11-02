let arrays = [[1, 2, 3], [4, 5], [6]];
let reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

console.log(arrays.reduce(reducer));
// → [1, 2, 3, 4, 5, 6]
