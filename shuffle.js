/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    if(!nums) return [];
    const arr1=nums.slice(0,n);
    const arr2=nums.slice(n);
    const results=[];
    let i=0,j=0;
    while(i<arr1.length || j<arr2.length){
      arr1[i] && results.push(arr1[i]);
      arr2[j] && results.push(arr2[j]);
       i++;
       j++;
    }
    return results;
};


var shuffle = function(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    return result;
};
