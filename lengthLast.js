function lengthLast(string){
  let i = string.length - 1;
  let length = 0;

  // Skip trailing spaces
  while(i >= 0 && string[i] === ' '){
      i--;
  }

  // Count characters of last word
  while(i >= 0 && string[i] !== ' '){
      length++;
      i--;
  }

  return length;
}

// Tests
console.log(lengthLast("my cat is my"));       // 2
console.log(lengthLast("hello world   "));     // 5
console.log(lengthLast("single"));             // 6
console.log(lengthLast("my cat   "));          // 3 ✅ works now
console.log(lengthLast("   "));                // 0 ✅ works


function lengthLast(s){
    let n=string.length-1;
    let count=0;
    while(n>=0){
        if(s[n]!=' '){
            count++;
        }else if(count>0){
            break;
        }
        n--;
    }
    return count;
}

t=O(N)
s=O(1)