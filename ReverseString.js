// we have to do it in place

function reverseString(arr){
    for(let i=0;i<arr.length/2;i++){
        [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]
    }
    console.log(arr)
}