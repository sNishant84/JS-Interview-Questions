class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            // Change: Use > to move larger values up
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return maxValue;
    }

    sinkDown(index) {
        let currentIndex = index;
        const lastIndex = this.heap.length - 1;

        while (true) {
            let leftChild = this.getLeftChild(currentIndex);
            let rightChild = this.getRightChild(currentIndex);
            let largest = currentIndex;

            // Change: Check if left child is larger than parent
            if (leftChild <= lastIndex && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }

            // Change: Check if right child is larger than current largest (parent or left)
            if (rightChild <= lastIndex && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }

            if (largest === currentIndex) break;

            this.swap(currentIndex, largest);
            currentIndex = largest;
        }
    }
}