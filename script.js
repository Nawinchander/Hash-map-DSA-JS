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


