// Remove Duplicate from the array

// sorted increasing order
[1,2,4,6,8]

// sorted decreasing order

[12,9,8,6]

// sorted non decreasing // it can have duplicates
[1,2,3,3,3,4,4,4]

// in this example we will take two pointer we have to do it in place. so what we can do we will
// run the loop till i and check if element at i > j this means it is unique then we have to first increement the j pointer value  put that i element in place of j now we have unique 
// elements

function removeDupicates(num) {
    let j = 0;
    for (let i = 0; i < num.length; i++){
        if ( num[i] > num[j]) {
            j++;
            num[j]=num[i]
        }
    }
    return num
}

console.log(removeDupicates([0,1,1,1,1,2,2,3,3,4]))