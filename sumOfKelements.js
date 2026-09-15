// in this problem we have to find the sum between two k smallest element . so for that in main function we will call the kth smallest
// two times with kth value. then we will basically check between the kth range and then add the sum.


function kthSum(arr,k1,k2){
    let firstSmallest=kthSmallest(arr,k1);
    let secondSmallest=kthSmallest(arr,k2);
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstSmallest && arr[i]<secondSmallest){
          sum+=arr[i]
        }
    }
    return sum
}