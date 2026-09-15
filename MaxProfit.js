
// best time to buy and sell stocks

function maxProfit(arr) {
    let maxProfit = -Infinity
   let min=Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min=arr[i]
        }
        let profit = arr[i] - min
        maxProfit=Math.max(profit,maxProfit)
    }
    return maxProfit
} 