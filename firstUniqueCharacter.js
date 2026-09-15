function firstUniqueCharacter(string){
    let s=new Map();
    for(let char of string){
        s.set(char,(s.get(char) || 0)+1)
    }
    for(let i=0;i<s.length;i++){
        if(s.get(s[i])==1){
            return i
        }
    }
    return -1;
}