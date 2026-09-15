window.timerId=123312;
window.timers={};

window.myTimeout=function(callback,delay,...args){
    const timerId=window.timerId+1;
    const time=Date.now()+delay;
    window.timers[timerId]={
        callback,
        time,
        args:[...args]
    }
    if(Object.keys(window.timers).length==1){
        requestIdleCallback(processTimers)
    }
     //  browser will schedule a low priority function when callstack is empty browser will execute this
}

function processTimers(){

    function executeTimers(key){
        const {callback,time,args}=window.timers[key];
        if(Date.now() >= time){
          callback(...args);
          delete window.timers[key]
        }else{
            requestIdleCallback(processTimers)
        }

    }

    Object.keys(window.timers).forEach(executeTimers)
}


myTimeout(function(){
  console.log("polyfill")
},1000)


