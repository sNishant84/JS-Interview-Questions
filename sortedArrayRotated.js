// this solution is for left rotation for this we have first find the min index that determine the number of times array
// is rotated and how to do that that element should be smaller then left and smalller then right and how to get
// where to move next just find the unsorted part the answer lies there.
//for right rotated N- index of min

function roatated(arr){
    let low=0;
    let N=arr.length;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor(low+high/2);
        let prev=(mid+N-1)%N
        let next=(mid+1)%N
        if(arr[mid]<=arr[prev] && arr[mid]<=arr[next]){
            return mid;
        }else if(arr[low]<=arr[mid]){
                 low=mid+1
        }else if(arr[mid]<=arr[high]){
            high=mid - 1
        }
    }
}

so in this problem first we have to find which side is sorted then check if target lies between l and mid otherwise
lies between mid and right.
function rotated(arr,target){
    let l=0;
    let r=arr.length-1;
    while(low<=high){
        let mid=Math.floor((l+r)/2);
        if(target==mid){
            return mid
        }
        if(arr[l]<=arr[mid]){
            if(target<arr[mid] && target>=arr[l]){
                r=mid-1;
            }else{
                l=mid+1
            }
        }else{
            if(target>arr[mid] && target<=arr[r]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    }
    return -1;
}