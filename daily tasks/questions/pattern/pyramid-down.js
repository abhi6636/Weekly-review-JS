let row = 5
let string = "";
for (i = 1; i <= row; i++) {
  for (j = 1; j < i; j++) {
    string += " ";
  } {
    for (j = 1; j <= (row * 2 - (2 * i - 1)); j++) {
      if (i == 1 || j == 1 || j == (row * 2 - (2 * i - 1))) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);