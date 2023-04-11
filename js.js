function toArray(num) {
  return Array.from(String(num), Number);
}

function toNumber(arr) {
  return parseInt(arr.join(''), 10);
}

console.log(toArray(235));
console.log(toNumber([2, 3, 5]));
