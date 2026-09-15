// search an element in sorted matrix

function matrix(arr,key){
    let i=0;
    let j=arr[0].length-1;
    while(i>=0 && i<arr.length && j>=0 && j<arr[0].length){
        if(arr[i][j]==key){
           return [i,j]
        }else if(arr[i][j] > key){
            j--;
        }else if(arr[i][j]<key){
            i++
        }
    }
    return -1
}