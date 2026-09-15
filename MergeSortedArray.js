// sorted in non decreasing order

// first approach we can make the copy of the first array then based on two pointer we can compare and put them in n1
function mergeArray(arr1, m ,arr2, n) {
    let n1copy = arr1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++){
        if (p2>=n && n1copy[p1] < arr2[p2] && p1<m) {
            arr1[i] = n1copy[p1];
            p1++;
        } else {
            arr1[i] = arr2[p2];
            p2++
        }
    }
    return arr1;
}

time complexity = O(m+n)
space complexity=0(m)


in this optimised approach we will start from back because from front we can lose values we simply do compare value of Pointer
just put at end if p2 goes below 0 this means array is sorted breaks if p1 goes less than zero that means we have copy the reaming elemenst to arr1

function mergeArray(arr1, m ,arr2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--){
        if (p2 < 0) break;
        if (p1>=0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1];
            p1--;
        } else {
            arr1[i] = arr2[p1];
            p2--;
        }
    }
}

time complexity = O(m+n)
space complexity=0(1)