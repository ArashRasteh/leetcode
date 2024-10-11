/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if (root == p || root == q || (root.left == p && root.right == q) || (root.right == p && root.left == q)) {
        return root;
    } 
    
    let left = root.left ? lowestCommonAncestor(root.left, p, q) : null
    let right = root.right ? lowestCommonAncestor(root.right, p, q) : null

    if (left != null  && right != null) {
        return root;
    } else if (left != null) {
        return left;
    } else if (right != null) {
        return right;
    }
};