function biggestArea(arr){
    let stack=[];
    let maxArea=0;
    for(let i=0;i<arr.length;i++){
        while(stack.length>0 && arr[stack[stack.length-1]] > arr[i]){
            let element=stack.pop();
            let nse=i;
            let pse=stack.length==0 ? -1 : stack[stack.length-1];
            maxArea=Math.max(maxArea,arr[element] * (nse-pse-1))
        }
        stack.push(i)
    }
    while(stack.length > 0){
        let nse=arr.length;
        let element=stack.pop();
        let pse=stack.length == 0 ? -1 : stack[stack.length-1]
        maxArea=Math.max(maxArea,arr[element] * (nse-pse-1))
    }
    return maxArea
}