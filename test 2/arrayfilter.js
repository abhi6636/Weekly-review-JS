function arrayFilter(arr) {

    return arr.filter(word => word.length === 4);
}
    
const words = (["Tomato", "Potato", "Pair"]);

const result = arrayFilter(words);

console.log(result);