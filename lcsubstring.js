

// Longest Common Substring
function lcsBottomUp(a,b,t){
    for(let i=0;i<=a.length;i++){
      for(let j=0;j<=b.length;j++){
        if(i==0 || j==0){
            t[i][j]=0
        }
      }
    }
    let maxLen = 0;
    for(let i=1;i<=a.length;i++){
        for(let j=1;j<=b.length;j++){
          if(a[i-1] == b[j-1]){
              t[i][j]=1+t[i-1][j-1]
              maxLen = Math.max(maxLen, t[i][j]);
          }else{
            t[i][j]=0
          }
        }
      }
  return t[a][b]
}

function main(x,y,a,b){
    let t=Array.from({length:a+1},()=>Array.from({length:b+1},()=>-1));
    lcs(x,y,a,b,t)
}