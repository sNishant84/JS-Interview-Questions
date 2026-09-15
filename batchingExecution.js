function createBatchingFunction(apiFn, intervalMs) {
    let queue = [];
    let timer = null;
  
    return function batchedApiCall(payload) {
      return new Promise((resolve, reject) => {
        queue.push({ payload, resolve, reject });
  
        if (!timer) {
          timer = setTimeout(async () => {
            const currentBatch = queue;
            queue = [];
            timer = null;
  
            try {
              const payloads = currentBatch.map(item => item.payload);
              const results = await apiFn(payloads);
  
              results.forEach((result, index) => {
                currentBatch[index].resolve(result);
              });
            } catch (error) {
              currentBatch.forEach(item => item.reject(error));
            }
          }, intervalMs);
        }
      });
    };
  }
  

  //  Design and implement a batching function that handles multiple API requests triggered randomly, batches them together, and sends a single consolidated API call to the server. This function should throttle the requests by grouping them into predefined intervals and ensure efficient server communication.


function mockApiCall(payload) {
    return new Promise((resolve) => {
      console.log("Batched API Call with Payload:", payload);
      setTimeout(() => {
        // Simulate a successful response for each payload item
        resolve(payload.map((item) => ({ success: true, data: item })));
      }, 500); // Simulate API latency
    });
  }

  const batchedApiCall = createBatchingFunction(mockApiCall, 100);

batchedApiCall({ id: 1, name: "John" }).then(console.log).catch(console.error);
batchedApiCall({ id: 2, name: "Jane" }).then(console.log).catch(console.error);
batchedApiCall({ id: 3, name: "Alice" }).then(console.log).catch(console.error);

// Throttling means limiting how often something is allowed to happen.
// Throttling limits how frequently an operation can execute, regardless of how often it’s requested.