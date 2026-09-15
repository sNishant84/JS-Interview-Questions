class RandomizedSet {
    constructor() {
      this.arr = [];
      this.map = new Map(); // value -> index
    }
  
    insert(val) {
      if (this.map.has(val)) return false;
  
      this.arr.push(val);
      this.map.set(val, this.arr.length - 1);
      return true;
    }
  
    remove(val) {
      if (!this.map.has(val)) return false;
  
      let index = this.map.get(val);
      let lastElement = this.arr[this.arr.length - 1];
  
      // Move last element to deleted spot
      this.arr[index] = lastElement;
      this.map.set(lastElement, index);
  
      // Remove last element
      this.arr.pop();
      this.map.delete(val);
  
      return true;
    }
  
    getRandom() {
      let randomIndex = Math.floor(Math.random() * this.arr.length);
      return this.arr[randomIndex];
    }
  }