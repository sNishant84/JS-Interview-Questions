function generateSum(n) {
    const numbers = [];  // Step 1: store all numbers
  
    function curried(num) {   // Step 2: a function that collects numbers
      numbers.push(num);      // Step 3: push current number
  
      if (numbers.length === n) {   // Step 4: check if we have enough
        return numbers.reduce((a,b) => a+b, 0); // sum and return
      } else {
        return curried;  // Step 5: otherwise, return itself for next call
      }
    }
  
    return curried;  // Step 6: return the curried function
  }
  
  const sum = generateSum(4);
  sum(1)(2)(3)(4)


  function generateSum(n){
    return function curried(...args){
        if(args.length>=n){
            return args.reduce((a,c)=>a+c,0)
        }else{
            return function(...next){
                return curried(...args,...next)
            }
        }
    }
  }
