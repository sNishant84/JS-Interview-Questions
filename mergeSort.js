// Merge sort is divide and conquer algorithm in which we basically divide the problem in smaller parts and then we conquer it.
// if we given an array we will keep dividing array in two halfs and coming back we will merge it .


function mergeSort(nums){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);
   let left=mergeSort(arr.slice(0,mid));
   let right=mergeSort(arr.slice(mid));
   return merge(left,right)

}

function merge(left,right){
    let res=[];
    let i=0;
    let j=0
    while(i<left && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }
    return [...res,...left.slice(i),...right.slice(j)];
}

// divide - n/2 - n/4 - n/8 

// n/2x log2n 

// merging time complexity is O(n) divide complexity is O(log2n) so it is nlog2n
// space complexity - O(n) because we are taking extra space while merging the array.