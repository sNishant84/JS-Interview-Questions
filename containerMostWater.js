//container with most water
in this question minimum height can form the container so we take two pointer one from start
and one from end. we take minimum between two and multiply with distance between them and we take the 
greedy approach which is less we move that pointer.


function maxArea(arr){
    let i=0;
    let j=arr.length-1;
    let maxWater=0
    while(i<j){
   let area=Math.min(arr[i],arr[j]);
   maxWater=Math.max(maxWater,area);
   if(arr[i]<arr[j]){
    i++;
   }else{
    j--
   }
    }
    return maxWater
}