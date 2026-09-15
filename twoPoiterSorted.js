function twoPointer(arr,target){
let i=0;
let j=arr.length-1;
let sum=0;
while(i<j){
sum=arr[i]+arr[j];
if(sum==target){
    return [i,j]
}else if(sum<target){
  i++
}else{
    j--;
}
}
}