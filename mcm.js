// in this problem we have to just to break problem first we put two pointers i and j k in the middle then we break the problem into
// i to k and k+1 to j which gives us the temporary answer and then we calculate answer from that.

// we have to first write the invalid input second step write loop


function matrixChainMultiply(arr,i,j){
    if(i>=j){ //because we need to index for matrix multiply
        return 0
    }
    if(t[i][j]!=-1){
        return t[i][j]
    }
    for(let k=i;k<=j-1;k++){//because we need to index for matrix multiply
     temp=matrixChainMultiply(arr,i,k)+matrixChainMultiply(arr,k+1,j)+arr[i-1]*arr[j]*arr[k]
     if(temp<mn){
        mn =temp
     }
    }
    t[i][j]= mn
    return mn
}

//arr[i-1]*arr[j]*arr[k] extra cost for matrix multiplication
// arr=40,20,30,10,30
    // 0  i   k     j