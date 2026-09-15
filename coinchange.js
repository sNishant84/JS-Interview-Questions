// coin change problem - when we are given no of ways then we have to add that.

function coinChange(coinArr,sum){
    let t=Array.from({length:coinArr.length+1},()=>Array.from({length:sum+1},()=>0));
    // Base case  in row there is sum and in column there is size of array  arr size is zero num of ways to add sum is zero and in column there is 
    // element in array and no of ways to is onw which is null subset to initialise with 1
  for (let i = 0; i <= n; i++) {
    t[i][0] = 1;
  }
    for(let i=1;i<=coinArr.length;i++){
        for(let j=1;j<=sum;j++){
            if(coinArr[i-1]<=j){
                t[i][j]=t[i-1][j]+t[i][j-coinArr[i-1]]
            }else{
                t[i][j]=t[i-1][j]
            }
        }
    }

}