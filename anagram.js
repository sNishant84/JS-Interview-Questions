function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    const count = {};
  
    for (const char of s) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (const char of t) {
      if (!count[char]) return false; // either not found or count = 0
      count[char]--;
    }
  
    return true;
  }
  

  t- O(N)
  S-O(1) because maximum lenght of map can be 26 characters not crating character array not creating copy of string