// in this problem we have to calculate the count of subset sum with given difference
// s1-s2 =diff
// s1+s2=sum
//2s1=diff+sum
//s1=diff+sum/2
// because s1 is like subset with this value and we have to count that value
// no this problem deduce to the count of subset sum i don't have to anything

// countSubsetSum(arr,diff+sum/2)
// target sum is same .


// in unbounded knapsack we can take item multiple times.eithere we take it if we take it will be multiole or not take it will not be included


t[i][j]=Math.max(val[n-1]+t[i][j-arr[i-1]],wt[i-1][j])