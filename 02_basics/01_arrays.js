const arr = [1, "Abhi", true]
console.log(arr);

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

// copying an array creates shallow copy(same reference)

myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9, 7)     // Inserts elements at the start
console.log(myArr);
myArr.shift()       // Removes first element from the array
console.log(myArr);
myArr.shift() 
console.log(myArr.includes(9));

const newArr = myArr.join();    // converts to string separated by comma(default)
console.log(newArr);
console.log(typeof newArr);
const newArr2 = myArr.join("me")   // separator can be anything 
console.log(newArr2); 

// slice, splice
const myn1 = myArr.slice(1,3);  // takes [1,3) elements of array
console.log(myn1);
console.log("A ", myArr);       // A  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);  // removes [1,3] elements from array
console.log(myn2);
console.log("B ", myArr);        // B  [ 0, 4, 5 ]