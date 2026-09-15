// it will select the min element and move it to the first index we  repeat the same process.

function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;i++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}

// small improvement 
// only swap where min!=i