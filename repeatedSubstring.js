function repeatedSubstring(string){
    let double = string+string;
    let newString=double.slice(1,double.length-1);
    return newString.includes(string);

}