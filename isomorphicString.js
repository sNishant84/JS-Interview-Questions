function isomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = new Map();
    let mapped = new Set();

    for (let i = 0; i < str1.length; i++) {
        let c1 = str1[i];
        let c2 = str2[i];

        if (map.has(c1)) {
            if (map.get(c1) !== c2) {
                return false;
            }
        } else {
            if (mapped.has(c2)) {
                return false;
            }

            map.set(c1, c2);
            mapped.add(c2);
        }
    }

    return true;
}

console.log(isomorphic('ab', 'aa')); // false
console.log(isomorphic('egg', 'add')); // true
console.log(isomorphic('foo', 'bar')); // false
console.log(isomorphic('paper', 'title')); // true