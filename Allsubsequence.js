function printSubsequences(str) {
    const result = [];

    function helper(index, current) {
        if (index === str.length) {
            result.push(current);
            return;
        }

        // Include current character
        helper(index + 1, current + str[index]);

        // Exclude current character
        helper(index + 1, current);
    }

    helper(0, "");
    return result;
}

// Example usage:
console.log(printSubsequences("abc"));
