// for this problem we have to simply modify it in the napsack problem weight is array here , w is sum value is not given then 
// we ignore it.and for max we take it or because we have to return true and false nothing else.
//for the row  we have arr and in the column we have sum. so if we have items i can make subset which is empty so initialized as 
// true and for if we have no item and only sum then it is false.

function subsetSum(arr,sum){
    let t=Array.from({length:arr.length+1},()=>Array.from({length:sum+1},()=>false));
    for (let i = 0; i <= n; i++) {
        t[i][0] = true;
    }
    for(let i=1;i<=arr.length;i++){
        for(let j=1;j<=sum;j++){
            if(arr[i-1]<=j){
                t[i][j]=t[i-1][j-arr[i-1]] || t[i-1][j]
            }else{
                t[i][j]=t[i-1][j]
            }
        }
    }
    return t[arr.length][sum]  
}