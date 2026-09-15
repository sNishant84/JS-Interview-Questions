// in bubble sort for each iteration number of iteration decreases.
// for each iteraction we are bubbling up the greatest element to the last.

// n=4 3 iterations
// n=3 2 iterations
// // n=2 1 iterations
// // n=4 so n-1 0,1,2 3 iterations

// for(let i=0;i<n-1)


function bubbleSort(arr){
    let n=arr.length-1;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[i]>arr[j+1]){
                [arr[i],arr[j+1]]=[arr[j+1],arr[i]]
            }
        }
    }
    return arr

}

// Time Complexity - O(n**2)
// space complexity - O(1)
 

// to improve this we can do 


function bubbleSort(arr){
    let n=arr.length-1;
    for(let i=0;i<n-1;i++){
        let isSwapped=false;
        for(let j=0;j<n-1-i;j++){
            if(arr[i]>arr[j+1]){
                [arr[i],arr[j+1]]=[arr[j+1],arr[i]]
                isSwapped=true
            }

        }
        if(!isSwapped) break;
    }
    return arr

}