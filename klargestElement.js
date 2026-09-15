
function largestElement(arr,k){
    let minHeap=new Heap();
    for(let i=0;i<arr.length;i++){
        if(i<k){
            minHeap.insert(arr[i])
        }else{
            if(arr[i]>minHeap.heap[0]){
             minHeap.extractMin();
             minHeap.insert(arr[i])
            }
        }
    }

    for(let i=0;i<minHeap.heap.length;i++){
        console.log(minHeap.heap[i])
    }

}

// 7 10 4 3 20 15



10
15
20