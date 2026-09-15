function duplicateIndices(arr,k){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
      if(map.has(arr[i])){
        if(Math.abs(map.get(arr[i])-i)<=k){
          return true
        }else{
          return false
        }
      }
      map.set(arr[i],i)
    }
    
    
  }
  
  console.log(duplicateIndices([1,2,3,1],3))