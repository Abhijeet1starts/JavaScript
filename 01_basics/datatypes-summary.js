// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);  // false
const bigNumber = 76436297942692387279833264742624
console.log(typeof bigNumber);  // number
const bigNum = 76436297942692387279833264742624n
console.log(typeof bigNum);     // bigint
let score = 89.5
console.log(typeof score);  // number

// Reference (Non-primitive)
// Array, Object, Functions

const user = ["Abhi", "Geetesh", "Rohit"];  // array
console.log(typeof user);   // object

let myObj = {
    name: "Abhi",
    age: 22,
    city: "Delhi"
}
console.log(typeof myObj);   // object

const myFunc = function() {
    console.log("Hello World");
}
console.log(typeof myFunc);   // function

// *************** Memory ********************

// Stack(Primitive), Heap(Non-primitive)

let myName = "Abhi";    // stored in stack
let anotherName = myName;
anotherName = "Geetesh";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "abhi@google.com";

console.log(userOne.email);
console.log(userTwo.email);