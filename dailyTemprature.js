

function dailyTemprature(arr){
    let stack=[];
    let result=Array(arr.length).fill(0);
    for(let i=0;i<arr.length;i++){
        let count=0;
        while(stack.length && arr[stack[stack.length-1]]<arr[i]){
               let idx=stack.pop();
               result[idx]=i-idx;
        }
        stack.push(i)
    }
}