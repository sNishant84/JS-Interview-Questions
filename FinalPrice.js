// You are given an integer array prices where prices[i] is the price of the ith item in a shop.

// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

 

// Example 1:

// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.



var finalPrices = function(prices) {
    let result=[];
    let match=false;
    for(let i=0;i<prices.length;i++){
        let j=i+1;
       while(j<prices.length){
        if(prices[i]>=prices[j]){
            result.push(prices[i]-prices[j]);
            match=true;
            break;
        }
        j++;
       }
     if(!match) result.push(prices[i]); 
     match=false;
    }
    return result
};


const result=[...prices];
const stack=[];
for(let i=0;i<prices.length;i++){
 while(stack.length > 0 && prices[stack[stack.length-1]]>=prices[i]){
     const idx=stack.pop();
     result[idx]=prices[idx]-prices[i]
 }
 stack.push(i)
}

return result;
};