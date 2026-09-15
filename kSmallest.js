function kSmallest(arr,k){
    let heap =new Heap();
    for(let i=0;i<arr.length;i++){
        if(i<k){
            heap.insert(arr[i])
        }else{
            if(arr[i]<heap.heap[0]){
                heap.extractMax();
                heap.insert(arr[i])
            }
        }
    }
    return heap.heap[0]
}

// Let's trace the algorithm using the example **`nums = [10, 5, 18, 2, 3]`** and find the **$k = 3^{rd}$ smallest element**.

// To find the $3^{rd}$ smallest, we maintain a **Max-Heap of size 3**. This heap will always hold the 3 smallest numbers we've seen so far. The "Max" part ensures the largest of those three is always at the top (the root), ready to be kicked out if we find something even smaller.

// ---

// ### Phase 1: Fill the Heap (First $k$ elements)

// We take the first 3 numbers from our array and put them into the heap.

// 1.  **Insert 10:** Heap is `[10]`
// 2.  **Insert 5:** Heap bubbles 10 to the top. Heap is `[10, 5]`
// 3.  **Insert 18:** 18 is larger than 10, so it becomes the new root.
//     * **Heap State:** `[18, 5, 10]`
//     * *Interpretation:* Currently, the 3 smallest numbers we've seen are 5, 10, and 18. The "limit" is 18.



// ---

// ### Phase 2: The Comparison (Remaining elements)

// Now we look at the rest of the array: `[2, 3]`.

// **Step 4: Process 2**
// * Is `2 < 18` (the heap root)? **Yes.**
// * This means 18 is definitely *not* the 3rd smallest, because we just found something smaller than it.
// * **Action:** `extractMax()` (remove 18) and `insert(2)`.
// * The heap reorganizes. 10 is now the largest of the group `{10, 5, 2}`.
//     * **Heap State:** `[10, 5, 2]`

// **Step 5: Process 3**
// * Is `3 < 10` (the new heap root)? **Yes.**
// * Again, 10 is "too big" to be in the 3 smallest now that we've found 3.
// * **Action:** `extractMax()` (remove 10) and `insert(3)`.
// * The heap reorganizes. 5 is now the largest of the group `{5, 3, 2}`.
//     * **Heap State:** `[5, 3, 2]`

// ---

// ### Phase 3: The Result

// The loop is finished. Our Max-Heap contains `[5, 3, 2]`. 

// These are the three smallest numbers from the original array. Since it is a **Max-Heap**, the $3^{rd}$ smallest value is sitting right at the top: **5**.



// ---

// ### Why this works
// By the time you finish the array, the Max-Heap acts like a "sieve." It lets small numbers in and pushes the largest "small" numbers to the top. When the dust settles, the root is the $k^{th}$ smallest because there are exactly $k-1$ numbers in the heap smaller than it.

// **Would you like to see how the `bubbleUp` or `sinkDown` logic specifically moved the numbers during one of these swaps?**