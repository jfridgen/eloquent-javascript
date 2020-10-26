function range(start, end, step) {
  let result = [];

  if (step === undefined && start <= end) {
    step = 1;
  }

  if (step === undefined && start > end) {
    step = -1;
  }

  for (let i = start; (start < end) ? i <= end : i >= end; i += step) {
    result.push(i);
  }
  return result;
}

function sum(numbers) {
  let sum = 0;
  for (x of numbers) {
    sum += x;
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
