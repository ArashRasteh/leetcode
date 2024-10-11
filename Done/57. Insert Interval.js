/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length == 0 || intervals == null) {
        return [newInterval];
    }
    let startIndex = -1, endIndex = -1;
    mainfor: for (let i = 0; i < intervals.length; i++) {
        if (startIndex === -1 && newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
            startIndex = i;
        }
        if ((newInterval[1] >= intervals[i][0] && newInterval[1] <= intervals[i][1]) || 
                (newInterval[1] >= intervals[i][1] && newInterval[0] <= intervals[i][0])) {
            endIndex = i;
            if (startIndex === -1) {
                startIndex = i
            }
            // break mainfor;
        }
    }

    console.log(startIndex, endIndex)

    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval)
    } else if (startIndex !== -1 && endIndex !== -1) {
        let newStart = Math.min(intervals[startIndex][0], newInterval[0])
        let newEnd = Math.max(intervals[endIndex][1], newInterval[1])
        intervals.splice(startIndex, endIndex - startIndex)
        intervals[startIndex] = [newStart, newEnd]
    } else if (startIndex !== -1 && endIndex === -1) {
        intervals[startIndex][1] = newInterval[1]
    } else if (startIndex === -1 && endIndex !== -1) {
        intervals[endIndex][0] = newInterval[0]
    } else {
        secondfor: for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] < newInterval[0] && intervals[i + 1][0] > newInterval[1]) {
                intervals.splice(i+1, 0, newInterval)
                startIndex = i+1;
                break secondfor;
            }
        }

        if (startIndex === -1) {
            intervals.push(newInterval)
        }
    }
    return intervals
};