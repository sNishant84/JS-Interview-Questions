function palindrome(arr,i,j){
    if(i>=j){ //because if string is 1 then we need zero partition
        return 0
    }
    if(ispalindrome(arr,i,j)==true){
        return 0
    }
    if(t[i][j]!=-1){
        return t[i][j]
    }
    for(let k=i;k<=j-1;k++){//because we need one less index of k to j
     temp=palindrome(arr,i,k)+palindrome(arr,k+1,j)+1 // because we have done 1 partition  nitin n itin 
     if(temp<mn){
        mn =temp
     }
    }
    t[i][j]= mn
    return mn
}