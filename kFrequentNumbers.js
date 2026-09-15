// in this problem we have to find element which have higher frequency . we have find top so that we have to make min heap.
// we have to make map first then we have to insert key and frequency to map.


function kFrequent(arr,k){
    let map={};
    let heap=new MinHeap();
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=(map[arr[i]] || 0)+1;
    }
    for(let key in map){
        heap.insert([key,map[key]]);
        if(heap.size()>k){
            heap.extractMin();

        }
    }
   return heap.heap.map((pair)=>pair[0])
}