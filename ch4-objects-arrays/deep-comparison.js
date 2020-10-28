function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }

  if (typeof val1 == "null" && typeof val2 == "null") {
    return true;
  }

  if (typeof val1 == "null" || typeof val2 == "null") {
    return false;
  }

  if (typeof val1 == "object" && typeof val2 == "object") {
    let val1Props = Object.keys(val1);
    let val2Props = Object.keys(val2);

    if (val1Props.length != val2Props.length) {
      return false;
    }

    for (let i = 0; i < val1Props.length; ++i) {
      if (!deepEqual(val1[val1Props[i]], val2[val2Props[i]])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
