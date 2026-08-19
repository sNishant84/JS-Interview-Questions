function autoRetry(promise,retry,delay){
    return new Promise((resolve,reject)=>{
        promise.then(res=>{
            resolve(res)
        }).catch(err=>{
            if(retry==0){
                reject(err)
            }
            setTimeout(()=>{
                autoRetry(promise,retry-1,delay)
                .then(resolve)
                .catch(reject)
            },delay)
        })
    })
}

function helper(fn, attempt = 0, retries = 5, baseDelay = 1000) {
    return fn().catch(err => {
      if (retries <= 0) {
        return Promise.reject(err);
      }
  
      const delay = Math.pow(2, attempt) * baseDelay;
  
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      }).then(() =>
        helper(fn, attempt + 1, retries - 1, baseDelay)
      );
    });
  }

  
  function createDummy() {
    let count = 0;
  
    return function dummy() {
      count++;
      if (count < 5) {
        return Promise.reject(new Error("failed to run"));
      }
      return Promise.resolve(count);
    };
  }
  
  const dummy = createDummy();

  helper(dummy)
  .then(res => console.log("response:", res))
  .catch(err => console.error("error:", err.message));


  ✅ Sequential execution (Promise chain)
function runSequentially(fns) {
  return fns.reduce((chain, fn) => {
    return chain.then(results =>
      fn().then(result => {
        results.push(result);
        return results;
      })
    );
  }, Promise.resolve([]));
}


async function runSequentiallyWithRetry(fns) {
    const results = [];
  
    for (const fn of fns) {
      const result = await helper(fn);
      results.push(result);
    }
  
    return results;
  }


  async function runSequentialWithRetrySafe(tasks) {
    const results = [];
  
    for (const task of tasks) {
      try {
        const result = await helper(task);
        results.push({ status: "fulfilled", value: result });
      } catch (err) {
        results.push({ status: "rejected", reason: err });
      }
    }
  
    return results;
  }


  const tasks = [
    () => task1(),
    () => task2(),
    () => task3()
  ];

//   const promises = [task1(), task2(), task3()]; no this alll will run immediately
//   time 0ms: task1() starts
// time 0ms: task2() starts
// time 0ms: task3() starts
// time 1ms: await task1
// time 2ms: await task2
// time 3ms: await task3
// The await only waits for completion — it does not delay the start.
