function unionSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j++;
        } else {
            // arr1[i] == arr2[j], add once
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) {
        if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
        j++;
    }

    return result;
}
