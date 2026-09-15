function filterObject(arr,filterBy){
    const result=[];
    if(typeof filterBy=='number'){
        result.push(arr[filterBy])
        return result
    }
     for(let i=0;i<arr.length;i++){
        let obj=arr[i];
        Object.keys(obj).forEach(key=>{
           if(obj[key]==filterBy){
            result.push(obj[key])
            return
           }
        })
     }
     return result

}
