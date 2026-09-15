// in this problem we have to check whter the tree is valid bst or not . for this wre can carry the previous low and high.
for the right subtree low should be curr.val and high should be carry forward and reverse is for the same.


function valid(root){
    const isBst=(curr,lo,high)=>{
        if(!curr) return true;

        if(lo!=null && lo>=curr.val || high!=null && high<=curr.val) return false

        let isLeft=isBst(curr.left,lo,curr.val)
        let isRight=isBst(curr.right,curr.val,hi);
        return isLeft && isRight;
    }
   return isBst(root,null,null);
 
}