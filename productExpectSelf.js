function productExceptSelf(arr){
    let products = [];

    for(let i = 0; i < arr.length; i++){
        let product = 1;
        for(let j = 0; j < arr.length; j++){
            if(j === i) continue;
            product *= arr[j];
        }
        products[i] = product;
    }

    console.log(products);
}

productExceptSelf([-1,1,0,-3,3]);
// [0, 0, 9, 0, 0]


intutation for this problem is that we will try to find the left part multiplication of that element and right part multiplication 
so for that we will start multiply from left till end for 0 index it will same for 1 index it will 0 and then for 2 *1
and for the right we start from right and goes till left same as for left. and then we will multiply that index value that will be the answer


function productExpectSelf(arr){
    let result=Array.from({length:arr.length}).fill(1);
    let prefix=1;
    let suffix=1;

    for(let i=0;i<arr.length;i++){
        result[i]=prefix;
        prefix=prefix*arr[i]
    }

    for(let i=arr.length-1;i>=0;i--){
        result[i]*=sufix;
        suffix=arr[i]*suffix;
    }
    return result;
}


[2,3,4]
0
1  2 2*3