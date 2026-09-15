function removeElement(arr, val) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!=val) {
            arr[j] = arr[i];
            j++;
        }
    }
    return j;
}

console.log(removeElement([3, 2, 2, 3],3))