//Task runner with concurrency . Concurrency = how many tasks are allowed to run at the same time
//A task runner:

// Gets a fixed list of tasks

// Runs them:

// in series or

// with limited concurrency

// Finishes and stops

// Mental model

// “Here are 10 jobs — run them and tell me when you’re done. mapSeries

// Promise.all with concurrency”

function runTasks(tasks, concurrency) {
    return new Promise((resolve, reject) => {
      const results = [];
      let running = 0;
      let index = 0;
      let completed = 0;
  
      function runNext() {
        // If all tasks are completed → resolve
        if (completed === tasks.length) {
          resolve(results);
          return;
        }
  
        // Start tasks while under concurrency limit
        while (running < concurrency && index < tasks.length) {
          const currentIndex = index;
          const task = tasks[index];
          index++;
          running++;
  
          task()
            .then(result => {
              results[currentIndex] = result;
            })
            .catch(reject)
            .finally(() => {
              running--;
              completed++;
              runNext(); // start next task
            });
        }
      }
  
      runNext();
    });
  }

  const tasks = [
    createTask(1, 1000),
    createTask(2, 500),
    createTask(3, 300),
    createTask(4, 700),
    createTask(5, 200),
  ];
  
  runTasks(tasks, 2).then(results => {
    console.log("All done:", results);
  });
  
