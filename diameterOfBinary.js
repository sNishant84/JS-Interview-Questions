

function diameter(root){
let diameter=0
    const depth=(curr)=>{
        if(!curr) return 0;
        const left=depth(curr.left);
        const right=depth(curr.right);
        let currdiameter=left+right;
        maxDiameter=Math.max(currdiameter,diameter);
       return 1+Math.max(left,right)
    }
    diameter(root);
    return diameter;
}