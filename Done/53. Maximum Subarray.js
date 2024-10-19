/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -9999999;

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i]
        if (nums[i] > max) {
            max = nums[i]
        }
    }

    return Math.max(max, nums[0]);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6