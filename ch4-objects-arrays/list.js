function arrayToList(array) {
  array.reverse();
  let ref = null;
  let list = null;
  for (let i = 0; i < array.length; ++i) {
    list = { value: array[i], rest: ref };
    ref = list;
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  let newList = {
    value: element,
    rest: list
  }
  return newList;
}

function nth(list, position) {
  if (position == 0) {
    return list.value;
  }

  return nth(list.rest, position - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
