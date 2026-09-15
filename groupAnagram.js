

function groupAnagram(strs){
    let map={};
    for(let i=0;i<strs.length;i++){
        let sorted=strs[i].split('').sort().join('');
        if(!map[sorted]){
            map[sorted]=[strs[i]]
        }else{
            map[sorted].push(strs[i])
        }
    }
    return [...Object.values(map)]
}

time complexity - for sorting m length of str mlogm and loop runs n times - n*mlogm
space complexity - there are n strings in map and each have m length key so it becomes O(n*m) because there are
no 26 characters these can be n strings with m length


so for optimised approach what we are doing instead of sorting we can make key from 26 character which can be linke this
a0b0c1...  suppose aet and tea will have the same key which then we group together first we create frequency for particular string then we append
with key. time complexity is O(n*m) n times loop with m character and key is constant. space is same.



function groupAnagram(strs){
    let map={};
    for(let i=0;i<strs.length;i++){
        let freqArr=Array(26).fill(0);
        let str=strs[i];
        for(let j=0;j<str.length;j++){
            let index=str[i].charCodeAt()-'a'.charCodeAt();
            ++freqArr[index];
        }
        let key=''
        for(let k=0;k<26;k++){
            key=key+String.fromCharCode(k)+freqArr[k];
        }
        if(!map[key]){
            map[key]=[str]
        }else{
            map[key].push(str)
        }
    }
}