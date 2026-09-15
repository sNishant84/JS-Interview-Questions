function flatten(arr, depth = 1) {
    if (depth === 0) return arr;
  
    const result = [];
  
    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...flatten(item, depth - 1));
      } else {
        result.push(item);
      }
    }
  
    return result;
  }
  
