
// in this approach we have to remove the outermost paranthesis so what we can do we can take the help of the
stack we have to push the element and then we push and we have to remove the element. so suppose if the length
of the stack is greater than 1 we have to add to the answer 

function outerMostParanthesis(s){
    let ans="";
    let stack=[];
    for(let i=0;i<s.length;i++){
       if(s[i]=='('){
       stack.push(s[i]);
       if(stack.length>1){
        ans+=s[i];
       }
       }else{
         if(stack.length>1){
        ans+=s[i];
       }
        stack.pop();
       }
    }
}

O(N)
O(N)

optimised approach

instead of stack we can use one variable.

function outerMostParanthesis(s){
    let ans='';
    let level=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
        level++;
        if(level > 1){
            ans+=s[i]
        }
    }else{
        if(level > 1){
            ans+=s[i]
        }
        level--;
    }
    }
    return ans;
}

space is O(1) because i am storing answer i cant modify it string are immutable in js