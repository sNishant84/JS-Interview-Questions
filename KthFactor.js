function kfactor(n, k) {
    let sqrt = Math.floor(Math.sqrt(n));
  
    // First half (small factors)
    for (let i = 1; i <= sqrt; i++) {
      if (n % i === 0) {
        k--;
        if (k === 0) return i;
      }
    }
  
    // Second half (large factors)
    for (let i = sqrt; i >= 1; i--) {
      if (n % i === 0 && i !== n / i) {
        k--;
        if (k === 0) return n / i;
      }
    }
  
    return -1; // if kth factor doesn't exist
  }

//   to calculate a factor number divide by i and n/i fastest way to calculate is square root of n. so first we go to
// for i decrease k if 0 so then we return i if k>0 then we interested in other part n/i 

// 1   2   3   |   4   6   12
// ↑           mirror       ↓

// Left side grows → right side shrinks.

// When you divide 12:

// 12 ÷ 1 = 12

// 12 ÷ 2 = 6

// 12 ÷ 3 = 4

// After 3, you don’t discover anything new:

// 12 ÷ 4 = 3 (already found!)

// 12 ÷ 6 = 2 (already found!)

// 12 ÷ 12 = 1 (already found!)