function previousSmallerElement(arr){
    const stack=[];
    const result=Array(arr.length).fill(-1);
   for(let i=arr.length-1;i>=0;i--){
       while(stack.length>0 && arr[stack[stack.length-1]]>arr[i]){
           let idx=stack.pop();
           result[idx]=arr[i];
       }
       stack.push(i)
   }
   return result
}

console.log(previousSmallerElement([4,5,2,10,8])) //[ -1, 4, -1, 2, 2 ]