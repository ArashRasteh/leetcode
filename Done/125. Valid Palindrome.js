var isPalindrome = function(s) {
    let ltrArr = s.match(/[a-z]/gi)
    
    if (!ltrArr)
        return true;

    for(let i = 0; i < (ltrArr.length / 2); i++) {
        // console.log(ltrArr[i].toLowerCase(), ltrArr[ltrArr.length -1 - i].toLowerCase())
        if (ltrArr[i].toLowerCase() != ltrArr[ltrArr.length -1 - i].toLowerCase()) {
            return false
        }
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))