s = "AABABBA", k = 1
//Replace 1 'A' or 'B' → longest substring with all same letters = "ABBB" → length 4
function characterReplacement(s, k) {
    let left = 0;
    let maxCount = 0;
    const count = new Map();
    let maxLength = 0;
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      count.set(char, (count.get(char) || 0) + 1);
      maxCount = Math.max(maxCount, count.get(char));
  
      if (right - left + 1 - maxCount > k) {
        const leftChar = s[left];
        count.set(leftChar, count.get(leftChar) - 1);
        left++;
      }
  
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
in this approach we can take map to remember the frequency of characters . take two pointer and start it from the start first save first Element
in the map then we need to check if windoe is valid means total map count - max count of element if less than equal to k means we can change that 
character if it is valid then we calculate window size then increase j and increase frequency of element if not valid decrease from map and then 
increase i. we can also save this we can take array instead of map it can save little size for us 

  function characterReplacement(s,k){
    let i=j=0;
    let map={};
     map[s[0]]=1;
    let maxWin=0
    while(j<s.length){
      if(isWindowValid(map,k)){
         maxWin=j-i+1;
         j++;
         map[s[j]]=map[s[j]] ? map[s[j]]++ : 1;
      }else{
        map[s[i]]--;
        i++;
      }
    }
    return maxWin;
  }

  function isWindowValid(map,k){
    let totalCount=0;
    let maxCount=0;
    for(let i=0;i<26;i++){
      let char=String.fromCharCode(i);
      if(map[char]){
        total+=map[char];
        maxCount=Math.max(maxCount,map[char])
      }
    }
    return (totalCount-maxCount<=k)
  }

  function characterReplacement(s,k){
    let i=j=0;
    let map=Array.fill(0);
    map[String.charCodeAt(0)-65]=1;
    let maxWin=0;
    while(j<s.length){
      if(isWindowValid(map,k)){
        maxWin=j-i+1;
        j++;
        map[String.charCodeAt(j)-65]++;
      }else{
        map[String.charCodeAt(i)-65]--;
        i++
      }
    }
    return maxWin
  }

  function isWindowValid(map,k){
    let totalCount=0
    let maxCount=0;
    for(let i=0;i<26;i++){
      totalCount=totalCount+map[i];
      maxCount=Math.max(maxCount,map[i])
    }
    return totalCount-maxCount<=k
  }

  t- O(n*26) = O(n*m)

  s-O(1) or m