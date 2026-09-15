function taskScheduler(arr,n){
 let freq=new Array(26).fill(0);
 for(let task of arr){
   freq[task.charAt(0)-65]++;
 }
 freq=freq.sort((a,b)=>b-a);
let maxFreq=freq[0];
let maxCount=0;
for(let f of freq){
    if(f==maxFreq) maxCount++;
   
}
let result=(maxFreq-1)*(n+1)+maxCount
return Math.max(result,task.length)
}

// in this problem we are given an array with task and their cooldown period.so for this we apply greedy along with the
// math approach first we take maxFreq because if [A,A,A,B,B,B] n=2 so it should looks like A_ _A_ _A we have to put 
// 2 dash after for its cooldown period so it becomes maxFreq-1 spaces are always less than objects. if 3 books then we need 2 spaces
//  which is equal to cooldown now [A _ _]block which is equal to
// n+1 which is the number itself because 2 gaps with number itself so n+1 and for the maxcount because we have to add that
// at the end so we need to find the max count also. in the end we are returning max because if there is 10 task we need
// atleast 10 unit time to process that if formula gives us 8 then that is incorrect
// Counting → O(n)

// Sorting 26 → O(1)

// Rest → O(1)

// So total:

// 𝑂
// (
// 𝑛
// )
// O(n)