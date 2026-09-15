// we have to find the right side view of the binary tree we have to do the level order traversal in reverse then we are able to solve this.


function rightSide(root){
    if(!root) return [];
    let q=[root];
    let ans=[];
    while(q.length){
        let levelSize=q.length;
        for(let i=0;i<levelSize;i++){
            let curr=q.shift();
            i==0 && ans.push(curr.val);
            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }
    return ans;
}