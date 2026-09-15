

function cyclicReference(object){
   const visited=new WeakSet();

   const traverseData=(obj)=>{
    let result={};
    if(visited.has(obj)){
        return;
    }
    
     if(typeof obj=='object'){
        visited.add(obj);
        for(let key in obj){
           let stageResult=traverseData(obj[key])
            if(stageResult){
                result[key]=stageResult
            }
        }
     }else{
        result=obj;
     }
   return result;
   }
  return  traverseData(object)

}
