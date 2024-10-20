/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let closestKpoints = []

    for (let i = 0; i < points.length; i++) {
        point = points[i]

        addNodeToClosest(point, Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2) ))
    }

    function addNodeToClosest(point, distance) {
        let position = closestKpoints.findLastIndex(el => el[0] < distance )
        
        if (position === -1) {
            if (closestKpoints.length == 0 || closestKpoints[0][0] >= distance) {
                position = 0
            } else {
                position = closestKpoints.length
            }
        } else {
            position++;
        }

        closestKpoints.splice(position, 0, [distance, point])

        if (closestKpoints.length > k) {
            closestKpoints.pop();
        }
    }
    return closestKpoints.map(x => x[1])
};

// console.log(kClosest([[1,3],[-2,2]], 1))
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
// console.log(kClosest([[1,3],[-2,2],[2,-2]], 2))
console.log(kClosest([[-2,10],[-4,-8],[10,7],[-4,-7]], 3)) //[[-4,-7],[-4,-8],[-2,10]]