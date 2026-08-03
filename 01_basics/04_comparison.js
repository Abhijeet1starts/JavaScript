console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparison convert null to a number, treating it as 0. That's why nul >= 0 is true. However, the equality check == does not convert null to a number, so null == 0 is false.

// === also checks data type
console.log("2" === 2); // false
