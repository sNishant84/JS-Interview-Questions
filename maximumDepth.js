
depth is the distance from the root and the farthest leaf.

we can solve this question from to type of approach top down and bottom up recursion

in top down we basically start from top and calculate the answer till bottom.
in bottom we go till bottom and back track our with answer.


function topDownMaxDepth(root){

    if(!root) return 0;
    let max=0
    const traversal=(curr,depth)=>{
     max=Math.max(max,depth);
     curr.left && traversal(curr.left,depth+1);
     curr.right && traversal(curr.right,depth+1)
    }
    traversal(root,1);
    return max
}

function bottomMaxDepth(curr){
    if(!root) return 0;
    let leftMax=bottomMaxDepth(curr.left);
    let rightMax=bottomMaxDepth(curr.right);
    return 1+Math.max(leftMax,rightMax);

}