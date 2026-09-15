// in this problem we have to set the left pointer to the right 


function connect(root){

if(!root) return root;
const traversal=(curr)=>{
  if(curr.left){
    curr.left.next=curr.right
  }
  if(curr.right && curr.next){
    curr.right.next=curr.next.left
  }
  curr.left && traversal(curr.left);
  curr.right && traversal(curr.right);
}
traversal(root);
return root;
}