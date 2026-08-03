const name = "Abhi"
const repoCount = 50

console.log(name + repoCount + "Value"); // Outdated way

console.log(`${name} has ${repoCount} repos`); // String Interpolation - Modern way

const gameName = new String("Cricket")

console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length); // not length() like in Java, it's a property in JS
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));
console.log(gameName.substring(0, 4));
console.log(gameName.slice(-6, 4)); // Start = 6th from last, end = 4th from start(1-based)

const str = "     Hello World      "
console.log(str);
console.log(str.trim()); // Removes whitespace from both ends

const url = "https://hitesh.com/hitesh%20ch%20oudhary"
console.log(url.replace("%20", "-")); // Replaces first occurrence of %20 with -
console.log(url);

console.log(url.includes("hitesh")); // true
console.log(url.startsWith("https")); // true

let str2 = "I am learning JavaScript"
console.log(str2.split(" ")); // Splits the string into an array of words
console.log(str2.split(" ", 3)); // Limits the split to first 3 parts