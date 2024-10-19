/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let spliceOne = true;

    if (intervals.length === 0) {
        return [newInterval]
    }

    let low = intervals.findIndex(el => el[1] >= newInterval[0])
    let high = intervals.findIndex(el => el[0] >= newInterval[1]);

    if (low < 0) {
        intervals.push(newInterval);
        return intervals;
    }
    console.log({low, high})

    if (high < 0) {
        high = intervals.length - 1;
    } else if (intervals[high][0] > newInterval[1]) {
        if (high > 0) {
            high--;
        } else {
            spliceOne = false;
        }
    }

    console.log({low, high})

    intervals.splice(
        low, 
        high - low + (spliceOne ? 1 : 0), 
        spliceOne ? 
            [
                Math.min(intervals[low][0], newInterval[0]),
                Math.max(intervals[high][1], newInterval[1])
            ] :
            newInterval
    )

    return intervals;
};

let result = insert([[1, 3], [6, 9]], [2, 5]);
let expectation = [[1,5],[6,9]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], 
    [4, 8]);
expectation = [[1, 2], [3, 10], [12, 16]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = (insert([[1,5]], [2,7]))
expectation = [[1,7]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = (insert([[1,5]], [6,8]))
expectation = [[1,5], [6,8]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = (insert([[1,5]], [5,7]))
expectation = [[1,7]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = (insert([[2,3],[5,7]], [0,6]))
expectation = [[0,7]]
console.log(JSON.stringify(result) === JSON.stringify(expectation))

result = (insert([[1,5]], [0,0]))
expectation = [[0,0],[1,5]]
console.log(result)
console.log(JSON.stringify(result) === JSON.stringify(expectation))