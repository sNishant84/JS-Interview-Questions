in this problem we have to look into circular array one solution is to double the array and we have to 
apply same next greater element in that


function nextGreaterElement(arr){
    const stack=[];
    arr=[...arr,...arr];
    const result=Array(arr.length).fill(-1);
    for(let i=0;i<arr.length;i++){
        while(stack.length > 0 && arr[stack[stack.length-1]]<arr[i]){
            let idx=stack.pop();
            result[idx]=arr[i];
        } 
        stack.push(i)
    }
    return result.slice(0,arr.length/2)
}

so if interview tell me we cant double the array so for that we can basically set our index in such a way
basically i%n is also the same as doubling the array


function nextGreaterElement(arr){
    const stack=[];
    const result=Array(arr.length).fill(-1);
    for(let i=0;i<arr.length*2;i++){
        while(stack.length > 0 && arr[stack[stack.length-1]]<arr[i%n]){
            let idx=stack.pop();
            result[idx]=arr[i%n];
        } 
        if(i<n){
stack.push(i%n)
        }
        
    }
    return result
}