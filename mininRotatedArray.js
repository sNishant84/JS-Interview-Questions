// we have to find the inflationg point from where the array kept decreasing.if the complete array sorted 
we have to just return the array of left if the middle element is less than 1 before than return the middle 
element. we have to find the answer in sorted half there we can find the inflation point.


function min(arr){
    let l=0;
    let r=arr.length-1;
    while(l<=r){
        if(arr[l]<=arr[r]){
            return arr[l]
        }
        let m=Math.floor((l+r)/2);
        if(arr[m]<arr[m-1]){
            return arr[m]
        }
        if(arr[l]>arr[m]){
            r=m-1;
        }else{
            l=m+1;
        }
    }
}