in this question what we can do basically we have to find the maxleft and maxRight take the min of these two and
then minus the height of current element to get the rainwater value.


function tapping(arr){
    let n=arr.length
let maxL[0]=0;
let maxR=[];
maxR[n-1]=arr[n-1];
for(let i=0;i<arr.length;i++){
    maxL[i]=Math.max(MaxL[i-1],arr[i]);
    maxR[n-i-1]=Mathmax(arr[n-i-1],maxR[n-i])
}
let ans=0;
for(let i=0;i<n;i++){
    let waterTrapped=Math.min(maxL[i],maxR[i])-arr[i]
    ans=ans+waterTrapped<0 ? 0 : waterTrapped;
}
return ans
}

O(n);
O(n)