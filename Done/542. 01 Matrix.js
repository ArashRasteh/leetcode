/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = []
    let maxVal = mat.length * mat[0].length
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j]);
            } else {
                mat[i][j] = maxVal
            }
        }
    }

    let directions = [[1,0], [-1,0], [0, 1], [0, -1]]

    while(queue.length > 0) {
        let curr = queue.shift()
        
        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];
            if (mat[curr[0] + direction[0]] != null && mat[curr[0] + direction[0]][curr[1] + direction[1]] != null && 
                    mat[curr[0] + direction[0]][curr[1] + direction[1]] > mat[curr[0]][curr[1]]) {
                mat[curr[0] + direction[0]][curr[1] + direction[1]] = mat[curr[0]][curr[1]] + 1
                queue.push([curr[0] + direction[0], curr[1] + direction[1]])
            }
        }
    }
    
    return mat
};
console.table(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]))
console.table(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))
// ┌─────────┬───┬───┬───┐
// │ (index) │ 0 │ 1 │ 2 │
// ├─────────┼───┼───┼───┤
// │    0    │ 0 │ 0 │ 0 │
// │    1    │ 0 │ 1 │ 0 │
// │    2    │ 1 │ 2 │ 1 │
// └─────────┴───┴───┴───┘