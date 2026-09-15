// in this problem we will start with the top down approach instead of bottom up while traversing down we have to mantain
the current max to compare it with other.


function goodNode(root){
    let ans=0;
    const traversal=(curr,currMax)=>{
    if(curr.val>=currMax){
        ++ans;
    }
    currMax=Math.max(currMax,curr.val);
    curr.left && goodNode(curr.left);
    curr.right && goodNode(curr.right);
    }
    traversal(root,-Infinity)
    return ans;
}
