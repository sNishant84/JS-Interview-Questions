function threesum(arr){
    arr.sort((a,b)=>a-b);
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){
            twoSum(arr,i,ans)
        }
    }
    return ans
}

function twoSum=function(arr,x,ans){
    let i=x+1;
    let j=arr.length-1;
    while(i<j){
        let sum=arr[i]+arr[j]+arr[x];
        if(sum>0){
            j--;
        }else if(sum<0){
            i++;
        }else{
            ans.push(arr[i],arr[x],arr[j]);
            while(i<j && arr[i]==arr[i-1]) i++
            i++;
            j--;
        }
    }
}



function threeSum(arr) {
    arr.sort((a, b) => a - b);

    const ans = [];

    for (let i = 0; i < arr.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                ans.push([arr[i], arr[left], arr[right]]);

                left++;
                right--;

                // Skip duplicates
                while (left < right && arr[left] === arr[left - 1]) {
                    left++;
                }

                while (left < right && arr[right] === arr[right + 1]) {
                    right--;
                }
            }
        }
    }

    return ans;
}

O(n**2)