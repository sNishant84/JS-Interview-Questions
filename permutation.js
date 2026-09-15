function permute(str) {
    const result = [];

    function helper(arr, l, r) {
        if (l === r) {
            result.push(arr.join(''));
            return;
        }

        for (let i = l; i <= r; i++) {
            // Swap
            [arr[l], arr[i]] = [arr[i], arr[l]];

            // Recurse for the rest
            helper(arr, l + 1, r);

            // Backtrack
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    }

    helper(str.split(''), 0, str.length - 1);
    return result;
}

// Example usage:
console.log(permute("abc"));
