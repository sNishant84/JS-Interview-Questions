function groupArrayOfObj(collection){
    const res=[{}]
    for(let item of collection){
        const type=item.type;
        if(!res[0].type){
            res[0].type=[]
        }
        res[0][type]={
            ...res[0][type],
            item
        }
    }
return res
}
