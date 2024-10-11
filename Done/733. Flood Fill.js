/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let prevColor = image[sr][sc]
    if (prevColor == color) {
        return image;
    }
    image[sr][sc] = color
    if (sr > 0 && image[sr - 1][sc] == prevColor) {
        image = floodFill(image, sr - 1, sc, color);
    }
    if (sr < image.length - 1 && image[sr + 1][sc] == prevColor) {
        image = floodFill(image, sr + 1, sc, color);
    }
    if (sc > 0 && image[sr][sc - 1] == prevColor) {
        image = floodFill(image, sr, sc - 1, color);
    }
    if (sc < image[0].length - 1 && image[sr][sc + 1] == prevColor) {
        image = floodFill(image, sr, sc + 1, color);
    }
    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0))