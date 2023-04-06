function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum;
}

let arr = [10, 20, -30];
let result = getSum(arr);
console.log(result);