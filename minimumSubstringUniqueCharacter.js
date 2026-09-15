function removeMinSubstring(s) {
    const n = s.length;
    const count = {}; // count frequency of each character

    // Step 1: count all characters
    for (let c of s) {
        count[c] = (count[c] || 0) + 1;
    }

    // Step 2: build target = extra duplicates we need to remove
    const target = {};
    for (let c in count) {
        if (count[c] > 1) {
            target[c] = count[c] - 1;
        }
    }

    // If no duplicates, nothing to remove
    if (Object.keys(target).length === 0) return s;

    // Step 3: sliding window to find minimum window containing all target
    let left = 0, minLen = Infinity, start = 0;
    const windowCount = {};
    let formed = 0; // number of target chars fully satisfied
    const required = Object.keys(target).length;

    for (let right = 0; right < n; right++) {
        const c = s[right];
        if (target[c]) {
            windowCount[c] = (windowCount[c] || 0) + 1;
            if (windowCount[c] === target[c]) {
                formed++;
            }
        }

        // shrink window from left
        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            const leftChar = s[left];
            if (target[leftChar]) {
                windowCount[leftChar]--;
                if (windowCount[leftChar] < target[leftChar]) {
                    formed--;
                }
            }
            left++;
        }
    }

    // Step 4: remove substring and return result
    return s.slice(0, start) + s.slice(start + minLen);
}

// Example usage:
console.log(removeMinSubstring("aabcc")); // Output: "ac"
console.log(removeMinSubstring("abacb")); // Output: "abc"
console.log(removeMinSubstring("abcd"));  // Output: "abcd" (no duplicates)
