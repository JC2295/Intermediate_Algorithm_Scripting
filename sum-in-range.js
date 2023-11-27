function sumAll(arr) {

  let sum = arr[0] + arr[1];

  let rangeArr = [];

  if (arr[0] > arr[1]) {
    for (let i = arr[1] + 1; i < arr[0]; i++) {
      rangeArr.push(i);
    }
  }
  else if (arr[1] > arr[0]) {
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      rangeArr.push(i);
    }
  }

  let rangeSum = 0;

  for (let i = 0; i < rangeArr.length; i++) {
    rangeSum += rangeArr[i];
  }

  return rangeSum + sum;
}

console.log(sumAll([1, 4]));

// Challenge Complete