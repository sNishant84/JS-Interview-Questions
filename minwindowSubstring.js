function uniqueCharacter(s, t) {
    let map = new Map();
    for (let ch of t) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let i = 0, j = 0;
    let count = map.size;
    let minLen = Infinity;
    let start = 0; // to track start index of min window

    while (j < s.length) {
        let ch = s[j];
        if (map.has(ch)) {
            map.set(ch, map.get(ch) - 1);
            if (map.get(ch) === 0) count--;
        }

        // Shrink window from left
        while (count === 0) {
            if (j - i + 1 < minLen) {
                minLen = j - i + 1;
                start = i;
            }

            let leftChar = s[i];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) === 1) count++;
            }
            i++;
        }
        j++;
    }

    if (minLen === Infinity) {
        console.log(""); // no window found
    } else {
        console.log(s.substring(start, start + minLen));
    }
}

uniqueCharacter('totmtaptat','tta');
