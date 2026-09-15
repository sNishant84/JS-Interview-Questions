

function lcs(root,p,q){
    if(p.val<root.val && q.val <root.val){
        return lcs(root.left,p,q)
    }else if(p.val>root.val && q.val > root.val){
    return lcs(root.right,p,q)
    }else{
        return root;
    }
}