// we have to find stone that are also jewels


function jewelStone(jewels,stone){
    let jset=new Set();
    let count=0;
    for(let i=0;i<jewels.length;i++){
        jset.add(jewels[i])
    }
    for(let j=0;j<stone.length;j++){
        if(jset.has(stone[i])){
            count++;
        }
    }
    return count
}


space complexity - O(1) because there can be no duplicates in the set and there can be only 52 characters
26 small 26 capital. so for large number of inputs this can be ignored.