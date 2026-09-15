function calculateDigit(n){
    sum=0
    while(n!=0){
      let digit=n%10;
      n=n/10;
      sum+=(digit*digit);
    }
    return sum
  }
  
  function happyNumber(n){
    
    let set = new Set();
    while(n!=1){
      if(set.has(n)){
        return false
      }
      set.add(n);
      n=calculateDigit(n)
    }
    return true
  }

  // time is 0(logn) because for max 13 digit we are getting 1053 as answer we are getting 3 digit for 243 for 999 we are going down
  // and for 4 we are geeting 4 so thats why 243+logn


//   Number	Digits
// 7	1
// 42	2

// Every time the number becomes 10× bigger, digits increase by 1
// log₁₀(1234) ≈ 4

// Maximum contribution of each digit = 81

// So if all digits are 9 (the largest possible number for that digit count):

// sum of squares = 9² + 9² + 9² + ... + 9²  (d times)
//                = 81 + 81 + ... + 81
//                = 81 × d

// No matter how huge your number n is, after one iteration of summing squares of digits, the number shrinks to ≤ 81 × number-of-digits

// So the value of n becomes much smaller → eventually bounded below ~243 for all numbers

// That’s why your loop in Happy Number runs only a constant number of times after shrinking

// can also do this fast and slow pointer

while(true){
    let slow=calculateDigit(n)
    let fast=calculateDigit(calculateDigit(n));
    if(fast==1){
        return true
    }
    if(slow==fast){
        return false;
    }
}