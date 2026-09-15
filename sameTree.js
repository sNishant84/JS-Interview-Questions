

function sameTree(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;

    return p.val==q.val && sameTree(p.left,q.left) && sameTree(p.right,q.right);
}