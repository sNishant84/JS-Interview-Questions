
function invert(root){

    if(!root) return root
    let temp=root.left;
    root.left=root.right;
    root.right=temp;
    invert(root.left)
    invert(root.right)
    return root
}