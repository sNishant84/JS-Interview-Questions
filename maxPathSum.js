// in this problem we have to return max path sum from the binary tree so for this problem we will use the bottom up approach
if the path is negative we ignore we calculate val+leftMax+righMax when we return from it we return maximum from left and right.


function maxPathSum(root){
    let maxPath=-Infinity;
    const traversal=(curr)=>{
        if(!curr) return 0;
        let leftMax=Math.max(0,traversal(curr.left));
        let rightMax=Math.max(0,traversal(curr.right));
        let currMax=curr.val+leftMax+rightMax;
        maxPath=Math.max(currMax,maxPath);
        return curr.val+Math.max(leftMax,rightMax);

    }
    traversal(root)
    return maxPath;
}