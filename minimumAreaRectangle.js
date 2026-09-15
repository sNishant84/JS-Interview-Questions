function minimumArea(arr){

    let set=new Set();
    for(let [x1,y1] of arr){
        set.add(`${x1}${y1}`)
    }
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let [x1,y1]=arr[i];
            let [x2,y2]=arr[j];
            if (x1 === x2 || y1 === y2) continue;
            if(set.has(`${x1}${y2}`) && set.has(`${y2}${x1}`)){
                let area=Math.abs(x2-x1)*Math.abs(y2-y1);
                if(area<=min){
                    min=are
                }
            }
        }
    }
     return min==Infinity ? 0 : min
}

// we need 4 point to complete the reactangle we basically check if we have x1,y1 to complete a line we x1,y2 for x2,y2 we need
// to have x2,y1 we are storing string in set because arr compare with refrence not value that's why for faster lookup.