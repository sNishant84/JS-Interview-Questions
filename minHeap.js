class MinHeap{
    constructor(){
        this.heap=[];
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2*index+1
    }
    getRightChild(index){
        return 2*index+2;
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    bubbleUp(index){
      let currentIndex=index;
      while(currentIndex>0){
        const parentIndex=this.getParentIndex(currentIndex);
        if(this.heap[currentIndex]<this.heap[parentIndex]){
            this.swap(currentIndex,parentIndex)
            currentIndex=parentIndex
        }else{
            break;
        }
      }
    }
    sinkdown(index){
        let currentIndex=index;
        let lastIndex=this.heap.length-1;
        while(true){
            let leftChild = this.getLeftChild(currentIndex);
            let rightChild = this.getRightChild(currentIndex);
            let smallest = currentIndex; // Assume parent is the smallest initially
    
            // Check if left child exists and is smaller than the current smallest
            if (leftChild <= lastIndex && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
    
            // Check if right child exists and is smaller than the current smallest
            if (rightChild <= lastIndex && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
    
            // If the smallest is still the parent, we are done
            if (smallest === currentIndex) break;
    
            this.swap(currentIndex, smallest);
            currentIndex = smallest;
        }
    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1)
    }

    extractMin(){
        if(this.heap.length==0){
            return null
        }
        if (this.heap.length==1){
            return this.heap.pop()
        }
        this.swap(0,this.heap.length-1);
        let minValue=this.heap.pop();
        this.sinkdown(0)
        return minValue
    }
}