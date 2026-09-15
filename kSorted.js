// K sorted Array we know one thing we want the sorted solution we need the min heap the nearly sorted element will always lie in
// the k range of element we push the element untill we have k then we simply pop the top element.

function kSorted(arr,k){
    let minHeap=new MinHeap();
    let result=[];
    for(let i=0;i<arr.length;i++){
     if(i<=k){
        minHeap.push(arr[i])
     }else{
       result.push(minHeap.extractMin());
       minHeap.insert(arr[i])
     }
    }

    while(minHeap.size() > 0){
        result.push(minHeap.extractMin())
    }
    return result
}



