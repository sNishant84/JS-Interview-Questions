function nextGreaterElement(arr){
    const stack=[];
    const result=Array(arr.length).fill(-1);
    for(let i=0;i<arr.length;i++){
        while(stack.length > 0 && arr[stack[stack.length-1]]<arr[i]){
            let idx=stack.pop();
            result[idx]=arr[i];
        } 
        stack.push(i)
    }
    return result
}

console.log(nextGreaterElement([6,0,8,1,3]))  // [ 8, 8, -1, 3, -1 ]


now we are given two array to find next greater Element

num1=[4,1,2] nums2=[1,3,4,2]
   

function nextGreater(nums1,arr){
    let map={};
    let stack=[];
    stack.push(arr[arr.length-1]);
    map[arr[arr.length-1]]=-1
    for(let i=arr.length-2;i>=0;i--){
        while(stack.length){
            if(stack[stack.length-1]<arr[i]){
                stack.pop()
            }else{
                map[arr[i]]=stack[stack.length-1];
                break;
            }
        }
        if(stack.length==0){
            map[arr[i]]=-1
        }
        stack.push(arr[i])
    }
    return num1.map(x=>map[x]);
}