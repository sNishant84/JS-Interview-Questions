


function balance(root){
        let ans=true;
    const calculateHeight=(curr)=>{
      if(!curr) return 0;
        let left =calculateHeight(curr.left);
        let right = calculateHeight(curr.right);
        if(Math.abs(left-right)>1){
            ans = ans || false
        }

        return 1+Math.max(left,right);
    }
    calculateHeight(root);
    return ans;
}