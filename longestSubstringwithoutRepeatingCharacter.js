function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLen = 0;
    const seen = new Set();
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
  
      // If duplicate, shrink window from the left
      while (seen.has(char)) {
        seen.delete(s[left]);
        left++;
      }
  
      // Add current char and update max length
      seen.add(char);
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  