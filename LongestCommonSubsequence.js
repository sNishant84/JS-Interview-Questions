function lcs(a,b){

    return solve(a,b,0,0)
}

function solve(a,b,i,j){
    if(i==a.length){
        return 0
    }
    if(j==b.length){
        return 0;
    }
    let ans =0;
    if(a[i]==b[j]){
        ans=1+solve(a,b,i+1,j+1)
    }else{
        ans=Math.max(solve(a,b,i,j+1),solve(a,b,i+1,j))
    }
    return ans
}




function lcs(a, b) {
    const memo = {};
  
    function solve(i, j) {
      const key = `${i},${j}`; // Unique key for each subproblem
  
      if (key in memo) return memo[key];
  
      if (i === a.length || j === b.length) {
        return 0;
      }
  
      let ans;
      if (a[i] === b[j]) {
        ans = 1 + solve(i + 1, j + 1);
      } else {
        ans = Math.max(solve(i, j + 1), solve(i + 1, j));
      }
  
      memo[key] = ans;
      return ans;
    }
  
    return solve(0, 0);
  }
  

  function longestPalindromicSubsequence(a){
    let b=a.split('').reverse().join('');
     let ans =lcs(a,b)
  }