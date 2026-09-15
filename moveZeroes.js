function moveZeroes(arr) {
     let j=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i]!=0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++
         }
    }
    console.log(arr)
}

moveZeroes([0, 1, 0, 3, 12])

// we take two pointers and check if i!=0 then we first swap with j and increeent j

time complexity - O(n)
space complexity -O(1)