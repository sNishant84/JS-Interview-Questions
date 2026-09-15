//so for this problem first we have to check if it odd it will be false and if it is even then it we have to pass half of sum 
// in the subsetarray prblem if one exist then other will also.

function equalPartition(arr,k){
    let sum=0;
  for(let i=0;i<arr.length;i++){
     sum+=arr[i];
  }
  if(sum%2!=0){
    return false;
  }
  return subsetSum(arr,sum/2)
}