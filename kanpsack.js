
let t=Array.from({length:n+1},()=>Array.from({length:w+1},()=>-1));
function knapSack(wt,val,w,n){
    if(n==0 || w==0){
        return 0
    }
    if(t[n][w]!=-1){
        return t[n][w]
    }
    if(wt[n-1]<=w){
        return t[n][w]= max(val[n-1]+knapSack(wt,val,w-wt[n-1],n-1),knapSack(wt,val,w,n-1))
    }else if(wt[n-1]>w){
        return t[n][w]=knapSack(wt,val,w,n-1)
    }
}

//bottoms up approach
let  t=Array.from({length:n+1},()=>Array.from({length:w+1},()=>-1));

function knapsack(wt,val,w,n){
    for(let i=0;i<n+1;i++){
        for(let j=0;j<w+1;w++){
            if(i==0 || j==0){
                t[i][j]=0
            }

            if(wt[i-1]<=j){
                t[i][j]=Math,max(val[i-1]+t[i-1][j-wt[i-1]],t[i-1][j]);
            }else if(wt[i-1] > w){
                t[i][j]=t[i-1][j]
            }
        }
    }
    return t[n][w]
}