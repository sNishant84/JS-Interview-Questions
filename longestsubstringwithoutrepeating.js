whenever we encounter substring try to apply sliding window because of its continuous nature


function uniqueCharacter(arr){
    let i=0;
    let j=0;
    let max=-Infinity;
    let map=new Map();
    while(j<arr.length){
        if(!map.has(arr[j])){
            map.set(arr[j],1)
        }else{
            map.set(arr[j],map.get(arr[j])+1);
        }
        while(map.size<j-i+1){
            if(map.has(arr[i])){
                map.set(arr[i],map.get(arr[i])-1)
                if(map.get(arr[i])==0){
                    map.delete(arr[i])
                }
            }
            i++;
        }
         if(map.size==j-i+1){
             console.log(map)
            max=Math.max(max,j-i+1);
            console.log("sub",arr,arr.substring(i,j+1));
        
        }
        j++;
    }
    console.log(max)
}
uniqueCharacter('pwwkew')

in this we can apply sliding window we take map for this case if value is present in map just store index then then increase the pointer and 
check if it is not present in map simply put in map othewise update the index in the map  if that map value is greater than i then shrink it update it to that
index.

function LongestSubstring(s){
    let map={};
    let i=0;
    let j=0;
    let maxLength=0
    for(j=0;j<s.length;j++){
        if(map[s[j]] && map[s[j]]>=i){
            i=map[s[j]]+1
        }
        map[s[j]]=j
        let currWs=j-i+1;
        maxLength=Math.max(maxLength,currWs)
    }
    return maxLength
}

time - O(N)
26+26+9+symbols+1
  O(1) constant it can be O(m)


  function LongestSubstring(s) {
    let map = {};
    let i = 0;
    let maxLength = 0;
    let startIndex = 0;

    for (let j = 0; j < s.length; j++) {
        if (map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }

        map[s[j]] = j;

        let currWs = j - i + 1;

        if (currWs > maxLength) {
            maxLength = currWs;
            startIndex = i;
        }
    }

    return s.substring(startIndex, startIndex + maxLength);
}

console.log(LongestSubstring("pwwkew")); // "wke"