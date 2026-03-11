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
let hashMap = {};

// Insert values
hashMap["name"] = "Nawin";
hashMap["age"] = 25;
hashMap["city"] = "Chennai";

// Access values
console.log(hashMap["name"]);  // Nawin
console.log(hashMap["city"]);  // Chennai

// Check key existence
console.log("age" in hashMap); // true

// Delete key
delete hashMap["age"];

console.log(hashMap);


/// output

// Nawin
// Chennai
// true
// { name: 'Nawin', city: 'Chennai' }




