class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    let value = this.group.values[this.index];
    if (typeof value !== 'undefined') {
      this.index++;
      return { value, done: false };
    }
    return { done: true };
  }
}

class Group {
  constructor() {
    this.values = [];
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  add(value) {
    if (!this.values.includes(value)) {
      this.values.push(value);
    }
  }

  delete(value) {
    this.values = this.values.filter(x => x !== value);
  }

  has(value) {
    if (this.values.includes(value)) {
      return true;
    }
    return false;
  }

  static from(iterable) {
    let group = new Group();
    let iterator = iterable[Symbol.iterator]();
    let obj = iterator.next();
    while (!obj.done) {
      group.add(obj.value);
      obj = iterator.next();
    }
    return group;
  }

  static from2(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from2([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
