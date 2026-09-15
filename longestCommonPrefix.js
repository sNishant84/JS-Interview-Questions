
so in this program we have simple approach we take first character from first string and compare with other
first characters. and there are corners case so what if second string gets end so we have to apply the check for its length
and what if the first string is small so main loop breaks then we have to basically return the first string itself


function commonPrefix(str){
    let x=0;
    while(x<str.length){
        let ch=str[0][x];
        for(let i=1;i<str.length;i++){
            if(ch!=str[i][x] || x== str[i].length){
                return str[0].substring(0,x)
            }
        }
        ++x;
    }
    return str[0];
}

T-O(S) s is the sum of length of all string thats why time complexity is s we are iterating it only oncuechange
t-O(1)