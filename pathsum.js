class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxPathSum(root) {
    let globalMax = -Infinity;
  
    function dfs(node) {
      if (!node) return 0;
  
      // max path sum from left and right (ignore negatives)
      const left = Math.max(dfs(node.left), 0);
      const right = Math.max(dfs(node.right), 0);
  
      // path through current node
      const currentSum = node.val + left + right;
  
      // update global max
      globalMax = Math.max(globalMax, currentSum);
  
      // return max contribution to parent
      return node.val + Math.max(left, right);
    }
  
    dfs(root);
    return globalMax;
  }

  
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxLeafToLeafPathSum(root) {
    let globalMax = -Infinity;
  
    function dfs(node) {
      if (!node) return 0;
  
      const left = dfs(node.left);
      const right = dfs(node.right);
  
      // Update global max only if both children exist
      if (node.left && node.right) {
        globalMax = Math.max(globalMax, left + node.val + right);
      }
  
      // Return max path from this node to leaf
      if (!node.left) return node.val + right;
      if (!node.right) return node.val + left;
  
      return node.val + Math.max(left, right);
    }
  
    dfs(root);
    return globalMax;
  }
  