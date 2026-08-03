let myDate = new Date()
console.log(myDate);                          // 2026-08-03T17:48:16.867Z
console.log(myDate.toString());               // Mon Aug 03 2026 17:48:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());           // Mon Aug 03 2026
console.log(myDate.toISOString());            // 2026-08-03T17:48:16.867Z
console.log(myDate.toJSON());                 // 2026-08-03T17:48:16.867Z
console.log(myDate.toLocaleDateString());     // 8/3/2026
console.log(myDate.toLocaleString());         // 8/3/2026, 5:48:16 PM
console.log(myDate.toLocaleTimeString());     // 5:48:16 PM
console.log(myDate.toTimeString());           // 17:48:16 GMT+0000 (Coordinated Universal Time)

let myCreatedDate = new Date(2023, 0, 23)   // month is 0-indexed as parameter
console.log(myCreatedDate.toLocaleString());
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)   // month is 0-indexed as parameter
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")     // here month is 1-indexed(YYYY-MM-DD)
console.log(myCreatedDate3);                    // 2023-01-14T00:00:00.000Z
let myCreatedDate4 = new Date("01-14-2023")     // (MM-DD-YYYY)
console.log(myCreatedDate4);                    // 2023-01-14T00:00:00.000Z

let myDate2 = Date()    // String
console.log(myDate2);
console.log(typeof myDate);
console.log(typeof myDate2);

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // time from 1st Jan, 1970 in ms
console.log(myCreatedDate.getTime());

console.log(myDate.getMonth());     // 0-based indexing
console.log(myDate.getDay());       // 1-based from Monday


