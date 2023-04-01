function checkPalindrome(palindrome) {

    const length = palindrome.length;

    for (let i = 0; i < length / 2; i++) {

        if (palindrome[i] !== palindrome[length - 1 - i]) {
            return 'not a palindrome';
        }
    }
    return 'palindrome';
}

 let palindrome = "malayalam";


const value = checkPalindrome(palindrome);

console.log(value);