const alphanumeric=/[^a-zA-Z0-9]/g


function validPalindrome(string){
const clearString=string.toLowerCase().replace(alphanumeric,'');
let i=0;
let j=string.length-1;
while(i<j){
    if(clearString[i]!=clearString[j]){
        return false;
    }
    i++;
    j--;
}
return true
}


function validPalindrome(s){
    s=s.toLowerCase();
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++;
        }else if(!s[j].match(/[a-z0-9]/i)){
            j--;
        }else if(s[i]==s[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}