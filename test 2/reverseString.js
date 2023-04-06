function reverse(str) {
    return str.split(' ')
      .map(wrd => wrd.length >= 5 ? wrd.split('').reverse().join('') : wrd)
      
      .join(' ');
  }
  
  const input = "Hey fellow warriors"
  
  const spinWords = reverse(input);
  
  console.log(spinWords);