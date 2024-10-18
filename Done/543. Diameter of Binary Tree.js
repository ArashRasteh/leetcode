/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let longestLength = 0;

  function findLongestPath(node) {
    let leftPathLength = 0;
    if (node.left) {
      leftPathLength = findLongestPath(node.left);
    }
    let rightPathLength = 0;
    if (node.right) {
      rightPathLength = findLongestPath(node.right);
    }

    if (leftPathLength + rightPathLength > longestLength) {
      longestLength = leftPathLength + rightPathLength;
    }

    return Math.max(leftPathLength, rightPathLength) + 1
  }

  findLongestPath(root);

  return longestLength;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

console.log(diameterOfBinaryTree(root)); // 3

root = new TreeNode(1, new TreeNode(2), null);

console.log(diameterOfBinaryTree(root)); // 1