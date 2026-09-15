async function executeInBatches(tasks,batches,retries=1){

    let remainingTasks=tasks.map((task,index)=>({task,id:index}));
    const results=[];
    while(remainingTasks.length){
        let currentBatch=remainingTasks.silce(0,batches);
        remainingTasks=remainingTasks.silce(batches);
        let allSettled=await Promise.allSettled(currentBatch.map(t=>t.task()));
        let failedTask=[];
        allSettled.forEach((result,i)=>{
            let currentTask=currentBatch[i].id
            if(result.status == 'fulfilled'){
                results[currentTask]=result.value
            }else{
                let original=currentBatch[i];
                if(!original.retries){
                    original.retries=0
                }

                if(original.retries<retries){
                    failedTask.push(original)
                }
            }
        })
        remainingTasks.push(...failedTask)
    }
    return results;
}
