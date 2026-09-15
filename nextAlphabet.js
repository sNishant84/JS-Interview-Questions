function nextTarget(arr,k){
        let low=0;
        let high=arr.length-1;
        let res='#';
        while(low<=high){
            let mid=Math.floor(low+high/2);
            if(arr[mid]==k){
               low=mid+1
            }else if(arr[mid]<k){
                  low=mid+1
            }else{
                high=mid-1;
                res=arr[mid];
            }
        }
        return res 

}