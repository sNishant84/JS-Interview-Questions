// Maximum subarray sum of size k

function maxSub(arr,k){
    let sum=0;
    let max=-Infinity;
    let i=0;
    let j=0;
    while(j<arr.length){
        sum=sum+arr[j];
        if(j-i+1<k){
            j++;
        }else if(j-i+1==k){
         max=Math.max(sum,max);
         sum=sum-arr[i];
         i++;
         j++;
        }
    }
    return max
}

function Subarraysum(arr,k){
    let sum=0;
    let i=0;
    let j=0;
    while(j<arr.length){
        sum=sum+arr[j];
        if(j-i+1<k){
            j++;
        }else if(j-i+1==k){
         console.log(sum)
         sum=sum-arr[i];
         i++;
         j++;
        }
    }
    return max
}