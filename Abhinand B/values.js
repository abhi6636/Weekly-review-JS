const myObject = {first:1,second:2,third:3}

function extract(obj) {
  const values = Object.values(obj);
  const result = values.join(" "); 
  return result;
}

const myString = extract(myObject);

console.log(myString);

