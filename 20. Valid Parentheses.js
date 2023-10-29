/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let c = s[i]
        if ('([{'.includes(c)) {
            stack.push(c)
        } else if ((c === ')' && stack[stack.length - 1] === '(') ||
                (c === ']' && stack[stack.length - 1] === '[') ||
                (c === '}' && stack[stack.length - 1] === '{')) {
            stack.pop()
        } else {
            return false;
        }
    }

    return stack.length === 0
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid(']'))
