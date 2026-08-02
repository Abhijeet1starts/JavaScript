let s1 = "33"
let s2 = "33abc"
let s3 = true
let s4 = null
let s5 = undefined

console.log(typeof(s1));
let n1 = Number(s1);
console.log(typeof(n1));
console.log(n1);            // 33

console.log(typeof(s2));
let n2 = Number(s2);
console.log(typeof(n2));
console.log(n2);            // NaN

console.log(typeof(s3));
let n3 = Number(s3);
console.log(typeof(n3));
console.log(n3);            // 1

console.log(typeof(s4));
let n4 = Number(s4);
console.log(typeof(n4));
console.log(n4);            // 0

console.log(typeof(s5));
let n5 = Number(s5);
console.log(typeof(n5));
console.log(n5);            // NaN

// For boolean conversion
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// ********* Operations *********
console.log(2/3);   // 0.66666....
console.log(2**3);  // 2^3 = 8

console.log("1" + 2 + 3);   // 123
console.log(1 + "2" + 3);   // 123
console.log(1 + 2 + "3");   // 33

