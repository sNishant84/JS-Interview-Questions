// Diameter = number of nodes (or edges) on the longest path between any two nodes in the tree.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let diameter = 0;

    function height(node) {
        if (node === null) return 0;

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        // Update diameter (in nodes)
        diameter = Math.max(diameter, leftHeight + rightHeight + 1);

        // Return height
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return diameter;
}
