// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'paths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY grid as parameter.
 */

function paths(grid) {
    // Write your code here
    let pathsCount = 0;
    let directions = [[0,1], [0, -1], [1, 0], [-1, 0]]
    
    let pathCountCache = Array(grid.length)
    for(let i = 0; i < pathCountCache.length; i++) {
        pathCountCache[i] = Array(grid[0].length)
    }
    
    function pathCounter(grid, i, j, pathIndex) {
        let thisPathCount = 0
        for (let k = 0; k < directions.length; k++) {
            let direction = directions[k];
            if (
                i + direction[0] < grid.length && i + direction[0] >= 0 && 
                j + direction[1] < grid[0].length && j + direction[1] >= 0 &&
                grid[i + direction[0]][j + direction[1]] > grid[i][j]
            ) {
                if (pathCountCache[i + direction[0]][j + direction[1]]) {
                    thisPathCount += pathCountCache[i + direction[0]][j + direction[1]] + 1
                } else {
                    thisPathCount += pathCounter(grid, i + direction[0], j + direction[1], pathIndex + 1) + 1
                }
            }
        }
        
        pathCountCache[i][j] = thisPathCount;
        return thisPathCount;
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            pathsCount += pathCounter(grid, i, j, 0);
        }
    }
    console.table(grid)
    console.table(pathCountCache)
    return pathsCount;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gridRows = parseInt(readLine().trim(), 10);

    const gridColumns = parseInt(readLine().trim(), 10);

    let grid = Array(gridRows);

    for (let i = 0; i < gridRows; i++) {
        grid[i] = readLine().replace(/\s+$/g, '').split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }

    const result = paths(grid);

    ws.write(result + '\n');

    ws.end();
}

// console.log(paths([ [ 5, 1 ], [ 2, 7 ] ]))
console.log(paths([ [ 0, 4, 3 ], [ 5, 8, 9 ], [ 5, 9, 9 ] ]))
// console.log(paths([[0]]))
// console.log(paths([[0, 1],[1, 2]]))
// console.log(paths([[0, 1, 2],[1, 2, 3]]))
// console.table([[0, 1, 2, 3],[1, 2, 3, 4]])
// console.log(paths([[0, 1, 2],[3, 2, 3], [4, 3, 4]]))
// console.table([[0, 1, 2],[3, 2, 3], [4, 3, 4]])