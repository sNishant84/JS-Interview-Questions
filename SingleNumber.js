function singleNumber(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
       num=num ^ arr[i]
    }
    console.log(num)
}

singleNumber([2,2,1])

use a xor operator 1^1 is 0 and any number ^ 0 is number