// k smallest element in binary tree if we do inorder traversal of bst is always sorted we can find the value of k easily


function kSmallest(root,k){
    let ans=null;
    let count=k;
    const traversal=(curr)=>{
        if(ans!=null) return
        curr.left && traversal(curr.left);
        --count;
        if(count==0){
            ans=curr.val
        }
         curr.right && traversal(curr.right);
    }
    traversal(root);
    return ans;
}