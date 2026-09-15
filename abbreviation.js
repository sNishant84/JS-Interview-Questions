function UniqueWord(arr) {
    this.map = new Map();
    this.set = new Set();
  
    for (let s of arr) {
      if (this.set.has(s)) continue;
  
      let ab = this.getAb(s);
      this.map.set(ab, (this.map.get(ab) || 0) + 1);
      this.set.add(s);
    }
  }
  
  UniqueWord.prototype.isUnique = function(word) {
    let ab = this.getAb(word);
  
    if (!this.map.has(ab)) return true;
  
    let count = this.map.get(ab);
    if (count === 1 && this.set.has(word)) return true;
  
    return false;
  };
  
  UniqueWord.prototype.getAb = function(s) {
    let len = s.length;
    if (len <= 2) return s;
  
    return s.charAt(0) + (len - 2) + s.charAt(len - 1);
  };