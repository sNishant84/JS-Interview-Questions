function sortByKey(arr, keyPath) {
    const keys = keyPath.split('.'); // split nested path like 'b.c' into ['b', 'c']
  
    return arr.sort((a, b) => {
      // Safely access nested values from a and b
      const aValue = keys.reduce((obj, key) => obj?.[key], a);
      const bValue = keys.reduce((obj, key) => obj?.[key], b);
  
      // If the value is string, use localeCompare for proper string sorting
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }
  
      // Otherwise (numbers), subtract for sorting
      return aValue - bValue;
    });
  }
  
