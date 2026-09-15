
// How Many Numbers Are Smaller Than the Current Number


var smallerNumbersThanCurrent = function(nums) {
    let j=0;
    let count=0;
    const result=[]
    while(j!=nums.length){
    for(let i=0;i<nums.length;i++){
     if(i==j) continue;
     if(nums[j]>nums[i]){
        count++;
     }
    }
    result.push(count);
    count=0;
    j++;
    }
   
    return result
};






var smallerNumbersThanCurrent = function(nums) {
    const result=[];
  let freq=new Array(101).fill(0);
  for(let num of nums){
    freq[num]++;
  }
  for(let i=1;i<101;i++){
    freq[i]=freq[i]+freq[i-1];
  }
  for(let num of nums){
    result.push(num==0 ? 0 : freq[num-1])
  }
  return result;
};