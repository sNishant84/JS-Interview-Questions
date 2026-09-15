// in this problem we have to merge ropes in such a way that it minimise the cost we build min heap and the two top elemnt in cost untile we 
// have element.


function Ropes(arr){
    let heap =new MinHeap();
    for(let i=0;i<arr.length;i++){
        heap.insert(arr[i])
    }
    let cost =0
    while(heap.size()>=2){
  let first=heap.extractMin();
  let second=heap.extractMin();
  cost =cost+first+second;
  heap.insert(first+second)
    }
    return cost
}