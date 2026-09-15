function minSubsetSumDifference(arr) {
    const n = arr.length;
    const totalSum = arr.reduce((a, b) => a + b, 0);

    // Subset Sum DP (true / false)
    let t = Array.from({ length: n + 1 }, () =>
        Array.from({ length: totalSum + 1 }, () => false)
    );

    // Base case
    for (let i = 0; i <= n; i++) {
        t[i][0] = true;
    }

    // Fill DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= totalSum; j++) {
            if (arr[i - 1] <= j) {
                t[i][j] =
                    t[i - 1][j - arr[i - 1]] ||
                    t[i - 1][j];
            } else {
                t[i][j] = t[i - 1][j];
            }
        }
    }

    // Use last row only (Aditya Verma logic)
    let minDiff = Infinity;
    for (let j = 0; j <= Math.floor(totalSum / 2); j++) {
        if (t[n][j] === true) {
            minDiff = Math.min(
                minDiff,
                totalSum - 2 * j
            );
        }
    }

    return minDiff;
}


// so here s1+s2=range 
//  s2+s1=range
 // s2=range-s1
 // i have to minimise s2-s1 it becones range-2s1