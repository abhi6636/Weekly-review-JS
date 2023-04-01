let n = 5
let string = ""
let count = 0

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += String.fromCharCode(j + 65)
        count++;
    }
    string += "\n"
}
console.log(string);