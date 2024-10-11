/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  if (n === 1) return 1;
  let lastTwoNums = [1, 2]
  for (let i = 2; i <= n; i++) {
      let leftNum = lastTwoNums.shift()
      lastTwoNums.push(lastTwoNums[0] + 0 + leftNum)
  }

  return lastTwoNums[0];
};

console.log(climbStairs(2))