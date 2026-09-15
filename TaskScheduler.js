class TaskScheduler {
    constructor(concurrency) {
      this.concurrency = concurrency;
      this.running = 0;
      this.queue = [];
    }
  
    add(task) {
      return new Promise((resolve, reject) => {
        this.queue.push({ task, resolve, reject });
        this.runNext();
      });
    }
  
    runNext() {
      if (this.running >= this.concurrency) return;
      if (this.queue.length === 0) return;
  
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
  
      task()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.running--;
          this.runNext();
        });
    }
  }

  const scheduler = new TaskScheduler(2);
  scheduler.add(task1);
scheduler.add(task2);
scheduler.add(task3);
scheduler.add(task4);

  
//   A task scheduler:

// Stays alive

// Accepts tasks over time

// Decides:

// when to run them

// which task runs next

// Enforces rules like:

// concurrency

// priority

// delays

// retries

// Mental model

// “Whenever a job comes in, I’ll schedule it properly.”


// Why scheduling even needs concurrency

// Without concurrency:

// Tasks run one by one

// System is slow and under-utilized

// With unlimited concurrency:

// Too many tasks start

// System overloads (CPU, memory, network)

// Failures increase

// 👉 Concurrency is the balance knob.
