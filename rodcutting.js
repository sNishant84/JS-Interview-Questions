// it is unbounded knapsack problem

function rod(arr,price,length){
let t=Array.from({length:arr.length+1},()=>Array.from({length:length+1},()=>-1));
  for(let i=0;i<=arr.length;i++){
    for(let j=0;j<=length;j++){
        if(arr[i-1]<=j){
          t[i][j]=Math.max(price[i-1]+t[i][j-arr[i-1]],t[i-1][j])
        }else{
            t[i][j]=t[i-1][j]
        }
    }
  }
  return t[n][length];
}