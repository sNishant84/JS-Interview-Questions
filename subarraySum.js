function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // base case: prefix sum 0 occurs once

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
