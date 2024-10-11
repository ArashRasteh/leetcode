/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // let nums_2d = nums.map((val, i) => [val, i])
    // nums_2d.sort((a, b) => a[0] - b[0])
    // nums =  nums_2d.map((val) => val[0])

    // for(let i = 0; i < nums.length; i++) {
    //    let max = nums.length - 1;
    //    let min = i+1
    //    innerwhile: while (true) {
    //       let j = Math.floor((min + max)/2)

    //       if (nums[i] + nums[j] == target) {
    //          return [nums_2d[i][1], nums_2d[j][1]]
    //       } else if (nums[i] + nums[j] > target && j > min) {
    //          max = j - 1;
    //       } else if (nums[i] + nums[j] < target && j < max) {
    //          min = j + 1;
    //       } else {
    //          break innerwhile;
    //       }
    //    }
    // }

    // let nums_hash = {}
    // nums.forEach((num, i) => {
    //    if (!nums_hash[num]) {
    //       nums_hash[num] = [i]
    //    } else {
    //       nums_hash[num].push(i);
    //    }
    // });

    // for (let i = 0; i < nums.length; i++) {
    //    let num = nums[i]
    //    if (nums_hash[target - num]) {
    //       if (nums_hash[target - num][0] != i) {
    //          return [i, nums_hash[target - num][0]]
    //       } else if (nums_hash[target - num][1] && nums_hash[target - num][1] != i) {
    //          return [i, nums_hash[target - num][1]]
    //       }
    //    }
    // }

    // let nums_hash = []
    // nums.forEach((num, i) => {
    //     if (!nums_hash[num]) {
    //         nums_hash[num] = [i]
    //     } else {
    //         nums_hash[num].push(i);
    //     }
    // });

    // for (let i = 0; i < nums.length; i++) {
    //     let num = nums[i]
    //     if (nums_hash[target - num]) {
    //         if (nums_hash[target - num][0] != i) {
    //             return [i, nums_hash[target - num][0]]
    //         } else if (nums_hash[target - num][1] && nums_hash[target - num][1] != i) {
    //             return [i, nums_hash[target - num][1]]
    //         }
    //     }
    // }

    
    
    let nums_hash = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (nums_hash[target - num] !== undefined) {
            return [i, nums_hash[target - num]]
        } else {
            nums_hash[num] = i
        }
      
    }
};

// console.log(twoSum([9, 8, 7, 7, 5, 4, 3, 2, 1], 17))
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3,3], 6))
// console.log(twoSum([3,2,3], 6))
// console.log(twoSum([2,5,5,11], 10))
console.log(twoSum(Array.from(Array(1_000_000).keys()).sort(() => .5 - Math.random()), 99))