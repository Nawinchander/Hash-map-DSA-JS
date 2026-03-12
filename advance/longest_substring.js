function longestUniqueSubstring(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1);
        }

        map.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));



/// Time Complexity /// o(n)
