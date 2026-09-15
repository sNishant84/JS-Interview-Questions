// Remove all adjacent duplicate abbaca to ca

function removeDuplicate(string){
let stack=[];
for(let char of string){
    if(stack.length > 0 && stack[stack.length-1] == char){
        stack.pop();
    }else{
        stack.push(char)
    }
}
return stack.join('')
}