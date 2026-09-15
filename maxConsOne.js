function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let count = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;             // increment current streak
            maxCount = Math.max(maxCount, count); // update max
        } else {
            count = 0;           // reset streak if 0 found
        }
    }

    return maxCount;
}
