// Creating a Hash Map
let hashMap = new Map();

// Insert values
hashMap.set("name", "Nawin");
hashMap.set("age", 25);
hashMap.set("profession", "Engineer");

// Access values
console.log(hashMap.get("name"));       // Nawin
console.log(hashMap.get("age"));        // 25

// Check if key exists
console.log(hashMap.has("profession")); // true

// Delete a key
hashMap.delete("age");

// Size of hashmap
console.log(hashMap.size); // 2


/// output

// Nawin
// 25
// true
// 2


//// using object

// Creating a Hash Map
let hashMap1 = {};

// Insert values
hashMap["name"] = "Nawin";
hashMap["age"] = 25;
hashMap["city"] = "Chennai";

// Access values
console.log(hashMap1["name"]);  // Nawin
console.log(hashMap1["city"]);  // Chennai

// Check key existence
console.log("age" in hashMap1); // true

// Delete key
delete hashMap1["age"];

console.log(hashMap);


/// output

// Nawin
// Chennai
// true
// { name: 'Nawin', city: 'Chennai' }

//// Frequency Counter using Hash Map

function frequencyCounter(arr) {

    let map = {};

    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    return map;
}

let arr = [1,2,2,3,3,3,4];

console.log(frequencyCounter(arr));

//// output

// {
//  1:1,
//  2:2,
//  3:3,
//  4:1
// }



