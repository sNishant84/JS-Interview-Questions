function longestCommonSubstring(a, b) {
    let maxLen = 0;
  
    function solve(i, j, count) {
      if (i >= a.length || j >= b.length) return;
  
      if (a[i] === b[j]) {
        const newCount = count + 1;
        maxLen = Math.max(maxLen, newCount);
        solve(i + 1, j + 1, newCount); // Continue streak
      } else {
        solve(i + 1, j, 0); // Reset count if mismatch
        solve(i, j + 1, 0); // Try other paths
      }
    }
  
    solve(0, 0, 0);
    return maxLen;
  }
  