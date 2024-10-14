/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let counter = []
  let largestIndex;
  let largestCount = 0;

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (!counter[num]) {
          counter[num] = 0;
      }
      counter[num]++;
      if (counter[num] > largestCount) {
          largestCount = counter[num];
          largestIndex = num;
      }
  }
  return largestIndex;
};

console.log(majorityElement([3,2,3])) // 3