In this problem we have check for the middle element pair and if the left side element is odd and the right side
element is odd. the element lies on that side.

function SingleElement(arr){
let l=0;
let r=arr.length-1;
while(l<=r){
    let m=Math.floor((l+r)/2);
    if(arr[m]==arr[mid-1]){
        let leftCount=m-1-l;
        if(leftCount%2==1){
            r=m-2
        }else{
            l=m+1;
        }
    }else if(arr[m]==arr[m+1]){
        leftCount=m-l;
        if(leftCount%2==1){
            r=m-1
        }else{
            l=m+2
        }
    }else{
        return arr[m];
    }
}
}