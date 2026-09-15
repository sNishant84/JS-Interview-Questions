// we have to find an element in infinite sorted array we do not know where to set the end so we can do start at 0 
// and end at 1. then we will check if key > high then we do high =high*2 and start at high until the key lie in the range.


function infiniteSortedArray(arr, key){
let low=0;
let high=1;
while(key> arr[high]){
low=high;
high=high*2
}
binarySearch(low,high,key)
}