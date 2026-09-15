function firstOccurence(arr,ele){
    let low=0;
    let high=arr.length-1;
    let first;
    while(low<=high){
        let mid=Math.floor(low+high/2)
        if(ele==arr[mid]){
            first=arr[mid];
          high=mid-1;
        }else if (ele<arr[mid]){
            high=mid-1
        }else{
            low=mid+1;
        }
    }
    return first;
}


function LastOccurence(arr,ele){
    let low=0;
    let high=arr.length-1;
    let first;
    let last;
    while(low<=high){
        let mid=Math.floor(low+high/2)
        if(ele==arr[mid]){
          res=arr[mid];
          start=mid+1;
        }else if (ele<arr[mid]){
            high=mid-1
        }else{
            low=mid+1;
        }
    }
    return res;
}