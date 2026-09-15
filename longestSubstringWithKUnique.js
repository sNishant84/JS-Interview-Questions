// longest Substring with k Unique characters


function uniqueCharacter(arr,k){
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
        while(map.size>k){
            if(map.has(arr[i])){
                map.set(arr[i],map.get(arr[i])-1)
                if(map.get(arr[i])==0){
                    map.delete(arr[i])
                }
                console.log(map,map.get(arr[i]))
            }
            i++;
        }
         if(map.size==k){
             console.log(map)
            max=Math.max(max,j-i+1);
        }
        j++;
    }
    console.log(max)
}
uniqueCharacter('aabacbebebe',3)