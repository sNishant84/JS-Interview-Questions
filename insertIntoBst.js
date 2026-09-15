

function insert(root,val){

    if(!root) new TreeNode(val);
    if(root.val<val){
        root.right=insert(root.right,val);

    }else{
        root.left=insert(root.left,val)
    }
    return root;
}