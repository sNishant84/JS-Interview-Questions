// basically we will compare mid and mid-1 and mid+1 also

function searchNearlySorted(arr,ele){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor(low+high/2);
        if(ele==arr[mid]){
            return mid
        }else if(mid-1>=start && ele==mid-1){
            return mid-1
        }else if(mid+1<=end && ele==mid+1){
            return mid+1
        }else if (ele <= arr[mid]){
         high=mid-2
        }else {
            low=mid+2
        }
    }
}