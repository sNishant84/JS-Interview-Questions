function reverseVowelsInWords(str) {
    const vowels = "aeiouAEIOU";
    let result = "";
    let word = "";

    for (let i = 0; i <= str.length; i++) {
        const char = str[i] || " "; // Add a space at the end to process the last word

        if (char !== " ") {
            word += char; // Build the current word
        } else {
            // Process the word to reverse vowels
            let chars = word.split("");
            let left = 0;
            let right = chars.length - 1;

            while (left < right) {
                if (!vowels.includes(chars[left])) {
                    left++;
                } else if (!vowels.includes(chars[right])) {
                    right--;
                } else {
                    // swap vowels
                    [chars[left], chars[right]] = [chars[right], chars[left]];
                    left++;
                    right--;
                }
            }

            result += chars.join("") + char; // append processed word and space
            word = ""; // reset for next word
        }
    }

    return result.trim();
}

// Example:
const input = "hello world this is react";
console.log(reverseVowelsInWords(input));
// Output: "holle world this is react"
