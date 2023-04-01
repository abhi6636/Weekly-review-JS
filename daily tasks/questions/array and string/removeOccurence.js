const arr = [1, 2, 1, 3, 1, 3, 4, 7, 7, 8, 9, 10, 11, 11];
const extractUnique = arr => {
   const res = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) {
         continue;
      };
      res.push(arr[i]);
   };
   return res;
};
console.log(extractUnique(arr));
