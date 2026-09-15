function fetchWithTimeout(url,timeout){
    return new Promise((resolve,reject)=>{
        const controller=new AbortController();
        const {signal}=controller;
        let timerId=null;
        fetch(url,{signal})
        .then((res)=>{
        return res.json();
        }).then((res)=>{
          if(timerId){
            clearTimeout(timerId)
          }
          resolve(res)
        }).catch(err=>reject(err))
        timerId=setTimeout(()=>{
          controller.abort();
        },timeout)
    })
    
}
