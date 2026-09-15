function customNestedElement(arr,fn){
let count=0;
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        count+=customNestedElement(arr[i],fn)
    }else if(fn(arr[i])){
        count+=1
    }
}
return count;
}
