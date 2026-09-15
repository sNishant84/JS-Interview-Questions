// k closet point to origin in this problem we have to find the point which is nearest to origin. for that we can use the distance 
// formula which is square root of (x2-x1)**2 +(y2-y1)**2 in this case x1 and y1 is 0 because of origin so then it remains square root of
// x2**2+y2**2. i can also remove square root for complexity that doesnt effect things .so key will be this distance along with two points.
// which heap to take in case of closet just dry run the whole problem which make sense take that .

function kClosetOrigin(arr,k){
    let heap =new MaxHeap();
    for(let i=0;i<arr.length;i++){
        heap.insert([(arr[i][0]**2+arr[i][1]**2),arr[i]])
        if(heap.size() > k){
            heap.extractMax();
        }
    }
   
    return  heap.heap.map((pair)=>pair[1]);

}