// in this question for base condition we have to think for smallest input which is 0 if zero in both then common is also zero
// then we start comparing with the last we will - the length then again call the function and if not then we have two choices
// include first whole and remove from the second and remove from the first last and take second whole and return the maximum

// top down
function lcs(x,y,a,b,t){
    if(a==0 || b==0){
        return 0
    } if(t[a][b]!=-1){
      return t[a][b]
    }
     if(x[a-1]==y[b-1]){
         t[a][b]= 1+lcs(x,y,a-1,b-1,t)
    }else{
         t[a][b]=Math.max(lcs(x,y,a,b-1,t),lcs(x,y,a-1,b,t))
    }
    return t[a][b];
}

function main(x,y,a,b){
    let t=Array.from({length:a+1},()=>Array.from({length:b+1},()=>-1));
    lcs(x,y,a,b,t)
}


function lcsBottomUp(a,b,t){
    for(let i=0;i<=a.length;i++){
      for(let j=0;j<=b.length;j++){
        if(i==0 || j==0){
            t[i][j]=0
        }
      }
    }
    for(let i=1;i<=a.length;i++){
        for(let j=1;j<=b.length;j++){
          if(a[i-1]==b[j-1]){
            t[i][j]=1+t[i-1][j-1]
          }else{
            t[i][j]=Math.max(t[i][j-1],t[i-1][j])
          }
        }
      }
      printSubsequence(a,b,t)
      return t[a][b]
}

O(a × b)
O(a × b)

//for printing the lcs we first create a table we first check if both matches we pick value if not we check that particular element
// top and left which is max goes to that untill it matches.

function printSubsequence(a,b,t){
    let i=a;
    let j=b;
    let s='';
    while(i>0 && j>0){
        if(a[i-1]==b[j-1]){
         s=a[i-1]+s
         i--;
         j--;
        }else if(t[i][j-1] > t[i-1][j]){
            scs = b[j - 1] + scs;
            j--
        }else{
            scs = a[i - 1] + scs;
            i--
        }
    }
    while(i>0){
        s=a[i-1]+s
        i--
    }
    while(j>0){
        s=b[j-1]+s
        j--
    }
   return s;
}