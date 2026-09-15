// Longest subarray sum k


//❝ Sliding window works only when expanding the window always increases the sum and shrinking always decreases it.
//Negative numbers break this guarantee. Sliding window CAN work with negative numbers — but only for certain types of problems.
//❌ It does NOT work for sum-based problems with a variable window. Sliding window fails with negative numbers only when:

////the window size is variable

//and the condition depends on sum / min / max in a monotonic way❞


function largestSubArray(arr, k) {
    let i = 0, sum = 0, max = 0;

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

        while (sum > k) {
            sum -= arr[i];
            i++;
        }

        if (sum === k) {
            max = Math.max(max, j - i + 1);
        }
    }

    return max;
}

//if have negatives

function largestSubarray(arr,k){
    let i=0;
    let sum=0;
    let max=-Infinity;
    let map=new Map();
    for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    if(sum==k){
        max=i+1;
    }
    if(map.has(sum-k)){
        max=Math.max(max,i-map.get(sum-k))
    }
      if(!map.has(sum)){
        map.set(sum,i)
      }
    }
    return max
}