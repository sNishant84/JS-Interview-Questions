const state = {
    PENDING: 'PENDING',
    FULLFILLED: 'FULLFILLED',
    REJECTED: 'REJECTED'
  };
  
  class MyPromise {
    successCallback = [];
    rejectCallback = [];
    value;
    reason;
    finallyHandler;
    state = state.PENDING;
  
    constructor(executor) {
      executor(
        this.resolve.bind(this),
        this.reject.bind(this)
      );
    }
  
    resolve(value) {
      if (this.state !== state.PENDING) return;
  
      this.state = state.FULLFILLED;
      this.value = value;
  
      this.successCallback.forEach(cb => cb(value));
      if (this.finallyHandler) this.finallyHandler();
    }
  
    reject(reason) {
      if (this.state !== state.PENDING) return;
  
      this.state = state.REJECTED;
      this.reason = reason;
  
      this.rejectCallback.forEach(cb => cb(reason));
      if (this.finallyHandler) this.finallyHandler();
    }
  
    then(handleFn) {
      return new MyPromise((resolve, reject) => {
        const handleFulfilled = (value) => {
          try {
            const result = handleFn(value);
            if (result instanceof MyPromise) {
              result.then(resolve).catch(reject);
            } else {
              resolve(result);
            }
          } catch (err) {
            reject(err);
          }
        };
  
        if (this.state === state.FULLFILLED) {
          handleFulfilled(this.value);
        } else {
          this.successCallback.push(handleFulfilled);
        }
      });
    }
  
    catch(handleFn) {
      return new MyPromise((resolve, reject) => {
        const handleRejected = (reason) => {
          try {
            const result = handleFn(reason);
            if (result instanceof MyPromise) {
              result.then(resolve).catch(reject);
            } else {
              resolve(result);
            }
          } catch (err) {
            reject(err);
          }
        };
  
        if (this.state === state.REJECTED) {
          handleRejected(this.reason);
        } else {
          this.rejectCallback.push(handleRejected);
        }
      });
    }
  
    finally(handleFn) {
      return new MyPromise((resolve, reject) => {
        const run = () => {
          handleFn();
          this.state === state.FULLFILLED
            ? resolve(this.value)
            : reject(this.reason);
        };
  
        if (this.state !== state.PENDING) {
          run();
        } else {
          this.finallyHandler = run;
        }
      });
    }
  }


  const state = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
  };
  
  class MyPromise {
    state = state.PENDING;
    value;
    reason;
    successCallback = [];
    rejectCallback = [];
    finallyCallback = [];
  
    constructor(executor) {
      try {
        executor(this.resolve.bind(this), this.reject.bind(this));
      } catch (err) {
        this.reject(err);
      }
    }
  
    resolve(value) {
      if (this.state !== state.PENDING) return;
      this.state = state.FULFILLED;
      this.value = value;
  
      this.successCallback.forEach(cb => cb(value));
      this.finallyCallback.forEach(cb => cb());
    }
  
    reject(reason) {
      if (this.state !== state.PENDING) return;
      this.state = state.REJECTED;
      this.reason = reason;
  
      this.rejectCallback.forEach(cb => cb(reason));
      this.finallyCallback.forEach(cb => cb());
    }
  
    then(onFulfilled) {
      if (this.state === state.FULFILLED) {
        onFulfilled(this.value);
      } else {
        this.successCallback.push(onFulfilled);
      }
    }
  
    catch(onRejected) {
      if (this.state === state.REJECTED) {
        onRejected(this.reason);
      } else {
        this.rejectCallback.push(onRejected);
      }
    }
  
    finally(onFinally) {
      if (this.state !== state.PENDING) {
        onFinally();
      } else {
        this.finallyCallback.push(onFinally);
      }
    }
  }
  
  
