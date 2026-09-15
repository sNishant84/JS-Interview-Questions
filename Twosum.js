function twoSum(arr,k){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
      console.log(map,k-arr[i],map.has(k-arr[i]))
      if(map.has(k-arr[i])){
        return [map.get(k-arr[i]),i]
      }
      map.set(arr[i],i)
    }
 return null
   }
 
 
 console.log(twoSum([3,2,4],6))