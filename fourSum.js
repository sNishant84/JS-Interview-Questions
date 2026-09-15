function fourSum(arr1,arr2,arr3,arr4){
    let map=new Map();
    for(let i of arr1){
      for(let j of arr2){
        let key=i+j;
        map.set(key, (map.get(key) || 0) + 1);
      }
    }
    let count=0
    for(let k of arr3){
      for(let l of arr4){
        let sum=-1*(k+l);
        count += map.get(sum) || 0;
      }
    }
    return count
  }

// a+b+c+d=0
  // (a+b)=-(c+d)