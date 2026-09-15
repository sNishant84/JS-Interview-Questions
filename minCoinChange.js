// we are adding 1 because if we are taking it we have to add it otherwise not.// we have column zero because to make zero we need zero coin 
// and for row we initalize it Infinity-1 because sum is 2 we need how many number of coin infinite.

function minCoins(coins, sum) {
    let n = coins.length;
    let INF = 1e9; // acts like INT_MAX
  
    let t = Array.from({ length: n + 1 }, () =>
      Array.from({ length: sum + 1 }, () => 0)
    );
  
    // Initialization
    for (let j = 1; j <= sum; j++) {
      t[0][j] = INF - 1;
    }
  
    // First coin initialization
    for (let j = 1; j <= sum; j++) {
      if (j % coins[0] === 0) {
        t[1][j] = j / coins[0];
      } else {
        t[1][j] = INF - 1;
      }
    }
  
    // DP
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (coins[i - 1] <= j) {
          t[i][j] = Math.min(
            1 + t[i][j - coins[i - 1]],
            t[i - 1][j]
          );
        } else {
          t[i][j] = t[i - 1][j];
        }
      }
    }
  
    return t[n][sum] >= INF ? -1 : t[n][sum];
  }
  