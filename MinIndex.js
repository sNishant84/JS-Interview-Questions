function minIndex(l1,l2){
    let minIndex=Infinity;
    let map=new Map();
    let result=[];
    for(let i=0;i<l1.length;i++){
        map.set(l1[i],i)
    }
    console.log(map)
    for(let j=0;j<l2.length;j++){
        let sum=0
        if(map.has(l2[j])){
            sum+=map.get(l2[j])+j;
            console.log(sum,map.get(l2[j]),j)
          if(sum<minIndex){
              minIndex=sum
              result=[l2[j]];
          }else if(sum==minIndex){
            result.push(l2[j]);
          }
        }
    }
    console.log(result)
}
minIndex(['Shogun','topioca express','Burger King','KFC'],['KFC','Shogun','Burger King'])
