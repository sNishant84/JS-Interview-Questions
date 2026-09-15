// so for this question we have to minimise the number of pages student reads. so i will start wiht the maximum ones and
// end with the sum first i will find the mid and start allocation the book. if distribution if valid then i minimise basically.

function max(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        
            sum+=arr[i]
        
    }
    return sum;
}

function pages(arr, k) {
    const n = arr.length;
    let start = max(arr);
    let high = sum(arr);
    let res = high;

    while(start <= high) {
        let mid = Math.floor((start + high) / 2);
        if(isValid(arr, n, k, mid)) {
            res = mid;
            high = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return res;
}

function isValid(arr,n,k,start){
    let student=1;
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
        if(sum>start){
            sum=arr[i];
            student++;
        }
        if(student>k){
         return false
        }
    }
    return true
}




function minEatingSpeed(piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let ans = end;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (canEat(piles, h, mid)) {
            ans = mid;        // possible speed
            end = mid - 1;    // try smaller speed
        } else {
            start = mid + 1;  // too slow, try faster
        }
    }

    return ans;
}

function canEat(piles, h, k) {
    let hours = 0;

    for (let bananas of piles) {
        hours += Math.ceil(bananas / k);
    }

    return hours <= h;
}
