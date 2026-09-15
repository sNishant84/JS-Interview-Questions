function frequencySort(arr){
    let heap=new MinHeap();
    let map={}
    for(let i=0;i<arr.length;i++){
      map[arr[i]]=(map[arr[i]] || 0)+1;
    }
    for(let key in map){
        heap.insert([key,map[key]]);
    }
    while(heap.size()>0){
       const [num,freq]=heap.extractMin();
       console.log(num,freq)
       for (let i = 0; i < freq; i++) {
        result.push(Number(num)); // convert key back to number
    }
    }
    return result
}