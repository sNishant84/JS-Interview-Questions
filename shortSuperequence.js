// if we have two string a and b we merge two string a and b that is supersequnce such that a and b both present in that string
// order maintained not coninuous idea is simple for this question we have to add both string and then what we have to basically 
// find common which is lcs and the answer is m+n-lcs

// for printing this what we have to do when we are printing the lcs we are moving toward the max but in this we have to print that value 
// suppose one string ends then we have to print the remaining also


function printSubsequence(a,b,t){
    let s='';
    let i=a.length;
    let j=b.length;
    while(i>=0 && j>=0){
        if(a[i-1]==b[j-1]){
            s=a[i-1]+s;
            i--;
            j--
        }else if(a[i-1][j]>b[i][j]){
            
        }
    }
}