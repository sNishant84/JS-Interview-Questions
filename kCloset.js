// in this problem we have to find out the k closet element to a given number. for this we will try to find the element 
in range from i to i+k. first will find the middle and check the distance from x which lies closer move to left or right 
according to that.


function kcloset(arr,x,k){
    let l=0;
    let r=arr.length-1;
    while(l<r){
        if((arr[m]+k)-x < x-arr[m]){
            l=m+1
        }else{
            r=m // answer can also lies till the middle.
        }
    }

    return arr.slice(l,l+k)
}