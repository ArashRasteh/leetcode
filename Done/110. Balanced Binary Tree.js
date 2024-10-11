const { arrayToBinaryTree , TreeNode } = require("../HelperModules/ArrayToBinaryTree");

    
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let left = 0, right = 0;

    if (!root) {
        return true;
    }

    return getHeight(root) != -1;
};

function getHeight(root) {
    let left = 0, right = 0

    if (root.left) {
        left =  getHeight(root.left);
    }
    if (root.right) {
        right =  getHeight(root.right);
    }

    if (left == -1 || right == -1) {
        return -1;
    }

    if (Math.abs(left - right) > 1) {
        return -1;
    } else {
        return Math.max(left, right) + 1
    }
}

console.log(isBalanced(arrayToBinaryTree([3,9,20,null,null,15,7])))