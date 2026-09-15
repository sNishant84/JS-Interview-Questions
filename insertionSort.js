
in insertion sort we basically take first elment , i=1 beffore that we assume that it is sorted and rest is not sorted
we compare it with previous element and check if it is smaller then basically move. then check current with the previous Elements if it is move by 1.


function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        p=i-1;
        curr=i;
        while(arr[p]>arr[curr] && p>=0){
            arr[p+1]=arr[p];
            p--;
        }
        arr[p+1]=arr[curr]
    }
    return arr
}

time complexity - O(n2)