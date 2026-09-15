function findDuplicateSubtrees(root) {
    let tripletToId = new Map();  // "val,leftID,rightID" -> unique subtree ID
    let idCount = new Map();      // subtreeID -> frequency
    let result = [];
    
    let id = 1; // unique ID counter
  
    function dfs(node) {
      if (!node) return 0;  // null subtree has ID 0
  
      let leftID = dfs(node.left);
      let rightID = dfs(node.right);
  
      let key = node.val + "," + leftID + "," + rightID;
  
      if (!tripletToId.has(key)) {
        tripletToId.set(key, id++);
      }
  
      let subtreeID = tripletToId.get(key);
  
      idCount.set(subtreeID, (idCount.get(subtreeID) || 0) + 1);
  
      if (idCount.get(subtreeID) === 2) {
        result.push(node);
      }
  
      return subtreeID;
    }
  
    dfs(root);
    return result;
  }