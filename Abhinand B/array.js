    function largestNums(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
          if (arr[i][j] > max) {
            max = arr[i][j];
          }
        }
        result.push(max);
      }
      return result;
    }
    
    largestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]); 