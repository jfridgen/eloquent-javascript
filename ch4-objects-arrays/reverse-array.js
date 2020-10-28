function reverseArray(input) {
  let output = []
  for (let i = (input.length - 1); i >= 0; --i) {
    output.push(input[i]);
  }
  return output;
}

function reverseArrayInPlace(input) {
  let placeholder;
  for (let i = 0; i < Math.floor(input.length / 2); ++i) {
    placeholder = input[input.length - 1 - i];
    input[input.length - 1 - i] = input[i];
    input[i] = placeholder;
  }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
