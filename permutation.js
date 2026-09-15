// in this problem we have to find whether particualr string is permuation of any substring.
we can sort both the string then appy sliding window but time complexity will be nlogn. so what we can do is that
we can make use of map and compare in each window. we can also take array for this approach.


function permuatation(s1,s2){
    let hashS=Array(26).fill(0);
    let hashW=Array(26).fill(0);
    let window_size=s1.length;
    for(let i=0;i<window_size;i++){
        hashS[s1.charCodeAt(i)-97]++;
        hashW[s2.charCodeAt(i)-97]++;
    }
    let i=0;
    let j=window_size-1;
    while(j<s2.length){
        if(isHash(hashS,hashW)){
            return true
        }else{
            hashW[s2.charCodeAt(i)-97]--;
            i++;
            j++;
            hashW[s2.charCodeAt(j)-97]++;
        }
    }
    return false
}


function isHash(hashS,hashW){
    for(let i=0;i<26;i++){
        if(hashS[i]!=hashW[j]){
            return false
        }
    }
    return true;
}

t - O(n*m)
s - O(m) or constant