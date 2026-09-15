function kTop(arr,k){
    let map=new Map();
    for(let item of arr){
      map.set(item,(map.get(item) || 0)+1)
    }
    let buckets=Array.from({length:arr.length+1},()=>[]);
    
    for(let [num,count] of map.entries()){
      buckets[count].push(num)
    }
    let result=[];
    
    for(let i=buckets.length-1 ;i>=0 && result.length<=k;i--){
      for(let num of buckets[i]){
        result.push(num)
        if(result.length==k) break;
      }
    }
    return result
  }

  // in this we will create map and store frequencies and then we create buckets for put num in frequency bucket and we start from end 
//   and push the Element