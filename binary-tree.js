/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function minDepth(node) {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 1;

      let leftDepth = node.left ? minDepth(node.left) : Infinity;
      let rightDepth = node.right ? minDepth(node.right) : Infinity;

      return Math.min(leftDepth, rightDepth) + 1;
    }

    return minDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function maxDepth(node) {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 1;

      let leftDepth = node.left ? maxDepth(node.left) : 0;
      let rightDepth = node.right? maxDepth(node.right) : 0;

      return Math.max(leftDepth, rightDepth) + 1;
    }

    return maxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = Number.MIN_SAFE_INTEGER;

    function findMaxSum(node) {
      if (!node) return 0;

      let leftSum = Math.max(0, findMaxSum(node.left));
      let rightSum = Math.max(0, findMaxSum(node.right));

      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

      return node.val + Math.max(leftSum, rightSum);
    }

    findMaxSum(this.root);
    return maxSum === Number.MIN_SAFE_INTEGER ? 0 : maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let result = null;
    const stack = [this.root];

    while (stack.length) {
      const node = stack.shift();

      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return result;
  }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
