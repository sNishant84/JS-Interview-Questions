function maxSubSize(arr,k){
    let i=0;
    let j=0;
    let arr2=[];
    while(j<arr.length){
        arr2.push(arr[j])
        if(j-i+1<k){
            j++
        }else if(j-i+1==k){
           let max=findMax(arr2);
           console.log(max);
           arr2.shift();
           i++;
           j++;
        }
    }
    
}

function findMax(arr){
    if(arr[0]>arr[1] && arr[0]>arr[2]){
        return arr[0]
    }else if(arr[1]>arr[0] && arr[1]>arr[2]) {
        return arr[1]
    }else{
        return arr[2]
    }
}


// optimised


// Maximum of all subarrays of size k

function maxSubSize(arr, k) {
    let i=0;
    let j=0;
    let dequeue=[];
    while(j<arr.length){
        while(dequeue.length && arr[dequeue[dequeue.length-1]] < arr[j]){
            dequeue.pop();
        }
        
        dequeue.push(j);
        if(j-i+1<k){
            j++;
        }else if(j-i+1==k){
            console.log(arr[dequeue[0]]);
            if(dequeue[0]==i){
                dequeue.shift();
            }
            i++;
            j++;
        }
        
    }
 }
maxSubSize([1,3,-1,-3,5,3,6,7],3)