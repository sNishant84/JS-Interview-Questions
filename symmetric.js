

function symmetric(root){
 
    function isMirror(left,right){
      if(!left && !right) return true;
      if(!left || !right) return false;
    return  left.val==right.val && isMirror(left.left,right.right) && isMirror(left.right,right.left)
    }

   return isMirror(root.left,root.right)
}


function symmetric(root){
    let q=[root.left,root.right];
    while(q.length){
        let p1=q.shift();
        let p2=q.shift();
        if(!p1 && !p2) continue;
        if(!p1 || !p2) return false;
        if(p1.val!=p2.val){
            return false;
        }
        q.push(p1.left,p2.right);
        q.push(p1.right,p1.left);
    }
    return true;
}