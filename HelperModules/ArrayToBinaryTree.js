/**
 * Represents a node in a binary tree with a value, and left and right children.
 *
 * @constructor
 * @param {*} val - The value of the tree node. If undefined, 0 will be assigned.
 * @param {TreeNode|null} [left=null] - The left child of the tree node.
 * @param {TreeNode|null} [right=null] - The right child of the tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function arrayToBinaryTree(array, i) {
    if (i === undefined) {
        i = 0
    } else if (array[i] == null) {
        return undefined;
    }

    return new TreeNode(array[i],
        arrayToBinaryTree(array, i*2 + 1), 
        arrayToBinaryTree(array, i*2 + 2))
}

// console.log(arrayToBinaryTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
// console.log(arrayToBinaryTree([3,9,20,null,null,15,7]))
// exit(0)

module.exports = {
    arrayToBinaryTree,
    TreeNode
}