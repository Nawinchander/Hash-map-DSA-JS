//// ["eat","tea","tan","ate","nat","bat"]


//output
////[
// ["eat","tea","ate"],
// ["tan","nat"],
// ["bat"]
// ]


function groupAnagrams(strs) {

    let map = new Map();

    for (let word of strs) {

        let key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));



/// Time complexity

//// O(n * k log k)


