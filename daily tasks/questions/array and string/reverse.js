
let str = "Hello";
let strlen = str.length;
let revStr = '';

for (var i = strlen - 1; i >= 0; i--) {
    revStr += str[i];
}
console.log(revStr);