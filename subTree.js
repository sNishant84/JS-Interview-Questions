// in this problem we have to find whether the tree is a subtree of another tree. wecan use same tree algo but it will take
time to solve so for this what we can do we can do serialisation which is uniquely identifying and convert it into tree
we can also think of preorder traversal but the problem with that it does not track the null values. so we make serilaisation with 
null nodes and one edge we have to separate the tree with delimeter now basically we have two string we have to find whether one string 
exists in other or not. we can use knp.


function serailse=function(root){
let hash='';

function traversal(curr){
    if(!curr){
        hash=hash+"#-";
        return;
    }
hash=hash+"-"+curr.val;
traversal(curr.left);
traversal(curr.right);
}
    traversal(root)
    return hash;
}

function subtree(tree,subtre){
    let hash1=serailse(tree);
    let has2=serailse(subtre);
    return hash1.includes(has2)
}