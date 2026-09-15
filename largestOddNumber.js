function largestOdd(s){
    let n=s.length-1;
    while(n>=0){
        if(Number(s[n])%2!=1){
       return s.substring(0,n+1)
        }
        --n;
    }
    return "";
}
in this approach start from behind and check from last if it is not divisible then it should be odd