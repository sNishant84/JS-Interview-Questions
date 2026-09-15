
function vowelConsonant(word){
let map={};
for(let i=0;i<word.length;i++){
    if(!map[word[i]]){
        map[word[i]]=1
    }else{
     map[word[i]]++;
    }
}
let vowels=['a','e','i','o','u'];
let maxVowel=0
let maxConsonants=0;
for(let i=0;i<word.length;i++){
    if(vowels.includes(word[i])){
        maxVowel=Math.max(maxVowel,map[word[i]])
    }else{
        maxConsonants=Math.max(maxConsonants,map[word[i]]);
    }
}
return maxVowel+maxConsonants;
}

above code complexity is - O(n)



one optimisation is that instead of using second loop we can use Object.keys and iterate over keys

we are using includes but array length is 5 so it will treated as constant
upper loop is O(n)
lower loop is O(26) because there can be 26 character which is O(1) final is O(n)


space complexity is O(1) because map can store 52 values