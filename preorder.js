
function preOrderTraversal(root){
    let ans=[];

    function traversal(curr){
        if(!curr) return ;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);

    }
    traversal(root)
    return ans;
}

function inOrderTraversal(root){
    let ans=[];
    function traversal(curr){
        if(!curr) return 
        traversal(curr.left);
        ans.push(curr.val)
        traversal(curr.right)

    }
    traversal(root);
}

function postOrderTraversal(root){
    let ans=[];
    function traversal(curr){
        if(!curr) return 
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val)

    }
    traversal(root);
}