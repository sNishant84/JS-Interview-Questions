function firstNeagtive(arr,k){
    let i=0;
    let j=0;
   let res=[];
    while(j<arr.length){
        if(arr[j]<0){
            res.push(arr[j]);
        }
        if(j-i+1<k){
            j++;
        }else if(j-i+1==k){
            if(res.length == 0 ) console.log(0)
            if(res[0]) console.log(res[0]);
            if(arr[i]==res[0]){
                res.shift();
            }
            i++;
            j++;
        }
    }
}