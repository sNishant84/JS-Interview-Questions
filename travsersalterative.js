in iterative approach we need to keep track of the side we need to store somewhere in recursive it remembers the call stack.  


function preorder(root){
    let stack=[root];
    let ans=[];
    while(stack.length){
     let curr=stack.pop();
     ans.push(curr.val);
    curr.right && stack.push(curr.right);
     curr.left && stack.push(curr.left);
    }
    return ans;
}


function inOrderTraversal(root){
    let ans=[];
    let stack=[];
    let curr=root;
    while(curr || stack){
        while(curr){
         stack.push(curr);
        curr=curr.left;
        }
        curr=stack.pop();
        ans.push(curr);
        curr=curr.right;
    }
return ans;
}


// in post order traversal we have to take two stacks. in first we take root and run till length pop from s1 push into s2 and save the children
in s2. then stack contain the answer in reverse order.


function postOrderTraversal(root){
    let s1=[root];
    let s2=[];
    while(s1.length){
        let curr=s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right)
    }
    let ans=[];
    while(s2.length){
        ans.push(s2.pop().val)
    }
    return ans;
}


function postOrderTraversal(root){
    let stack=[];
    let curr=root;
    let ans=[];
    let lastVisited=[];
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr=curr.left
        }
        let peek=stack[stack.length-1];
        if(peek.right && peek.right!=lastVisited){
            curr=curr.right;
        }else{
            ans.push(peek.val);
            lastVisited=stack.pop();
        }
    }
    return ans;
}