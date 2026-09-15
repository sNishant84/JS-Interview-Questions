


function firstAndLast(arr){

let l=0;
let r=arr.length-1;
let ans=[-1,-1]
while(l<r){
    let m=Math.floor((l+r)/2)
    if(arr[m]<target){
      l=m+1
    }else{
        r=m
    }
}
if(arr[l]==target) ans[0]=arr[l]

l=0;
r=arr.length-1;
while(l<r){
    let m=Math.ceil((l+r)/2);
    if(arr[m]>target){
        r=m-1
    }else{
        l=m
    }
}
if(arr[l]==target) ans[1]=l;
return ans;
}

second approach

function firstAndLast(arr){
    let l=0;
    let r=arr.length-1;
    let ans=[-1,-1];
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(arr[m]==target){
            ans[0]=m;
            r=m-1
        }else if(arr[m]<target){
            l=m+1;
        }else{
            r=m-1;
        }
    }

     while(l<=r){
        let m=Math.floor((l+r)/2);
        if(arr[m]==target){
            ans[1]=m;
            l=m+1
        }else if(arr[m]<target){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return ans;
}