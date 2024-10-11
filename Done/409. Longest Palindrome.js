/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  s = s.split('').sort()
  let count = 0;

  for (let i = 1; i < s.length; i++) {
      if (s[i] == s[i-1]) {
          count++;
          i++;
      }
  }

  count *= 2;

  if (count < s.length) {
      count++;
  }

  return count;
};