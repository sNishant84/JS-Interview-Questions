function floor(arr,k){
    let low=0;
    let high=arr.length-1;
    let res;
    while(low<=high){
        let mid=Math.floor(low+high/2);
        if(arr[mid]==k){
            return arr[mid]
        }else if(arr[mid]<k){
              res=arr[mid];
              low=mid+1
        }else{
            high=mid-1;
        }
    }
    return res 
}

function ceil(arr,k){
    let low=0;
    let high=arr.length-1;
    let res;
    while(low<=high){
        let mid=Math.floor(low+high/2);
        if(arr[mid]==k){
            return arr[mid]
        }else if(arr[mid]<k){
              low=mid+1
        }else{
            high=mid-1;
            res=arr[mid];
        }
    }
    return res 
}