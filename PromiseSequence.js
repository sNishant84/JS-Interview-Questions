const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1 done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2 done'), 500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 3 done'), 800))
  ];
  
  async function runInSequence(taskFunctions) {
    const results = [];
  
    for (const task of taskFunctions) {
      const result = await task(); // Wait for current task to finish
      results.push(result);
      console.log(result); // Optional: log result
    }
  
    return results;
  }
  
  runInSequence(tasks)
