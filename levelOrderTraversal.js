
for level order traversal we uses queue in this question we to have element on each level into an array

function levelOrderTRaversal(root){
    if(!root) return [];
    let q=[root];
    let ans=[];
    while(q.length){
        let levelAns=[];
        let levelArr=q.length;
        for(let i=0;i<levelArr;i++){
            let curr=q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelAns.push(curr)
        }
        ans.push(levelAns)
    }
    return ans;
}


function levelOrderTRaversal(root){
    if(!root) return [];
    let ans=[];
   traversal=function(curr,level){
    if(!ans[level]) ans[level]=[];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left,level+1);
    curr.right && traversal(curr.right,level+1);
   } 
   traversal(root,0);
   return ans;
}