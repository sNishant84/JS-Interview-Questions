

function pathSum(root,targetSum){
   if(!root) return false;
   let ans = false
    function traversal(curr,sum){
        let newSum=sum+curr.val;
       if(!curr.left && !curr.right){
            if(newSum==targetSum){
                ans=ans || true;
            }
       }
        curr.left && traversal(curr.left,newSum);
        curr.right && traversal(curr.right,newSum)
    }
    traversal(root,0);
    return ans;
}


function hasPath(root,targetSum){
    if(!root.left && !root.right){

            return targetSum==root.value
    }

    let leftSumPath=hasPath(root.left,targetSum-root.value);
    let rightSumPath=hasPath(root.right,targetSum-root.value)
    return leftSumPath || rightSumPath
}