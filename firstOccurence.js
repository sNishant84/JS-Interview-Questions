function first(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    for (let i = 0; i <= n - m; i++) {
        let match = true;

        for (let j = 0; j < m; j++) {
            if (str1[i + j] !== str2[j]) {
                match = false;
                break;
            }
        }

        if (match) return i;
    }

    return -1;
}


first("hello world", "lo") 

in this question we are basically using a sliding window kind of approach for this.we go till the
n-m because no need run till the last we only need to check the window and we increase it one by one.

// (n × m)