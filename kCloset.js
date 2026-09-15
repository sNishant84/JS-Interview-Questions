//in this question we have to find the k smallest element from the k so for this we can subtract x from the element so we get the smallest
//ones in that case but we have to choose the heap we will go with the max heap because we pop out the useless we only need important
// so at the top we have max we pop out thiose remaining are the smallest element which we need. since we are storing it in pair math.abs(x-arr[i]),arr[i].
// we need to make changes in our heap code also when we are comparing we need to this.heap[currentIndex][1] > this.heap[parentIndex][1] like this

function kCloset(arr,k,x){
let heap =new MaxHeap();
for(let i=0;i<arr.length;i++){
    heap.insert([Math.abs(x-arr[i]),arr[i]]);
    if(heap.size()>k){
        heap.extractMax();
    }
}
return heap.heap.map(pair => pair[1]);

}