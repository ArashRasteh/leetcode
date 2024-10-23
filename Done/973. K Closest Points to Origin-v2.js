import {MaxPriorityQueue} from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MaxPriorityQueue(x => x.dist)

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const dist = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
        maxHeap.enqueue(point, dist)

        if (maxHeap.size() > k) {
            maxHeap.dequeue()
        }
    }

    return maxHeap.toArray().map(x => x.element)
};

console.log(kClosest([[1,3],[-2,2]], 1))
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
console.log(kClosest([[1,3],[-2,2],[2,-2]], 2))
const t0 = performance.now();
kClosest([[-2,10],[-4,-8],[10,7],[-4,-7]], 3)
const t1 = performance.now();
console.log(t1 - t0)

console.log(kClosest([[-2,10],[-4,-8],[10,7],[-4,-7]], 3)) //[[-4,-7],[-4,-8],[-2,10]]