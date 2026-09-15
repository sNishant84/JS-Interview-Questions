function intersection(arr1,arr2){
    let set2=new Set(arr2);
      return [...new Set(arr1.filter((x)=>set2.has(x)))] // to spread the set in array.
  }
  

  function intersection(arr1,arr2){
    arr1=arr1.sort((a,b)=>a-b);
    arr2=arr2.sort((a,b)=>a-b);
    console.log(arr1,arr2)
   let i=0;
   let j=0;
   let ans=[]
   while(i<arr1.length && j<arr2.length){
       if(arr1[i]>arr2[j]){
           j++;
       }else if(arr1[i]<arr2[j]){
           i++
       }else{
          ans.push(arr1[i]);
          i++;
          j++;
       }
   }
   return ans

 }

  
  console.log(intersection([1,2,3,2],[2]))