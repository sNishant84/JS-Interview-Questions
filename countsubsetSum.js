

function countSubset(arr,sum){
    let t=Array.from({length:arr.length+1},()=>Array.from({length:sum+1},()=>0));
    for(let i=0;i<=arr.length;i++){
        t[0][j]=1
    }
    for(let i=1;i<=arr.length;i++){
        for(let j=0;j<=sum;j++){
            if(t[i-1]<=j){
                t[i][j]=t[i-1][j-arr[i]]+t[i-1][j]
            }else{
                t[i][j]=t[i-1][j]
            }
            
        }
    }
    return t[arr.length][sum]
}