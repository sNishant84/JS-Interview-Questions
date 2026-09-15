// word containing character

function char(words,x){
    let arr=[];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr;
}
when you are given a word you are returning a array you dont count it as well . we are not using it in the logic
we are only using it for storing result. O(1)because answer are asking to give in new array.