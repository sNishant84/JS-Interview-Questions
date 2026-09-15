function removeDuplicateChars(sentence) {
    const seen = new Set();
    let result = '';
  
    for (const char of sentence) {
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
  
    return result;
  }