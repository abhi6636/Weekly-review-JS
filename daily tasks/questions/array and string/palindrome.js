function checkPalindrome(palindrome) {
    const len = palindrome.length;
    for (let i = 0; i < len / 2; i++) {

        if (palindrome[i] !== palindrome[len - 1 - i]) {
            return 'this is not a palindrome';
        }
    }
    return 'this is a palindrome';
}
let palindrome = "malayalam";
const value = checkPalindrome(palindrome);
console.log(value);