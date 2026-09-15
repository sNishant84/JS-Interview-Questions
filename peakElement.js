
// this problem is also a example of peak element . monotonic array means arr[i+1] > arr[i].biotnic means it is increasing and then decreasing.
//so we have to find the peak for this.
function peakElement(arr){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>arr[0] && arr[mid]>arr[arr.length-1]){
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
                return arr[mid];
            }else if(arr[mid]<arr[mid+1]){
                  low=mid+1;
            }else{
                high=mid-1
            }
        }else if(mid==0){
            if(arr[0]>arr[1]){
                return arr[0]
            }else{
                return arr[1]
            }
        }else if(mid==arr.length-1){
            if(arr[arr.length-1] > arr[arr.length-2]){
                return arr[arr.length-1]
            }else{
                return arr[arr.length-2]
            }
        }
    }

}


function peakElement(arr){
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let m=Math.floor((l+r)/2);
        if(arr[m]<arr[m+1]){
            l=m+1;
        }else{
            r=m;
        }
    }
    return r;
}