// // Types - int, double, string, boolen, array, object

// // ====== Variables ========

// a = 10;
// console.log(a);

// // Bad Practise - it can lead to unexpected behavior, especially in larger codebases where variable names might clash or be unintentionally overwritten.

// // We use keyword - var, let, const

// var b = 1;
// let c = 1;
// const d = 1;

// // ======== Reassign ========

// // Using var
// var x = 10;
// x = 20; // Reassigning the value of variable x
// console.log(x); // Output: 20

// // Using let
// let y = 30;
// y = 40; // Reassigning the value of variable y
// console.log(y); // Output: 40

// // Using const
// const z = 50;
// z = 60; // TypeError: Assignment to constant variable (cannot reassign const)
// console.log(z);

// // ======= Redeclare ==========

// // Using var
// var x = 10;
// var x = 20; // Redeclaration of variable x with var, no error
// console.log(x); // Output: 20

// // Using let
// let y = 30;
// let y = 40; // SyntaxError: Identifier 'y' has already been declared

// // Using const
// const z = 50;
// const z = 60; // SyntaxError: Identifier 'z' has already been declared

// // ======= Block Scope ==========

// // Using var
// var x = 10;
// if (true) {
//   var x = 15;
//   console.log(x); // Output: 10
// }
// console.log(x); // Output: 10 (var is function-scoped)

// // Using let
// let y = 20;
// if (true) {
//   let y = 25;
//   console.log(y); // Output: 20
// }
// console.log(y); // ReferenceError: y is not defined (y is block-scoped)

// // Using const
// const z = 30;
// if (true) {
//   const z = 30;
//   console.log(z); // Output: 30
//   // z = 40; // TypeError: Assignment to constant variable (cannot reassign const)
// }
// console.log(z); // ReferenceError: z is not defined (z is block-scoped)

// // ======= Hoisted ==========

// // Using var
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;
// console.log(y); // Output: 20

// // Using let
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;
// console.log(y); // Output: 20

// // Using const
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 30;
// console.log(z); // Output: 30

// // =============================
// // =========== ARRAY ===========
// // =============================

// // It is a common practice to declare arrays with the const keyword.
// const arr = [1, 2, 3, 4, "4343"];

// // length of array
// let length = arr.length;

// // add to array
// arr.push("ABC");
// arr[0] = "1";

// // Remove last element
// arr.pop();

// // ==========================================================================

// // Slicing
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // Extract a section of the array from index 1 to index 3 (end index is exclusive)
// const slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits); // Output: ['banana', 'cherry', 'date']

// // Extract a section of the array from index 2 to the end
// const slicedFruits2 = fruits.slice(2);
// console.log(slicedFruits2); // Output: ['cherry', 'date', 'elderberry']

// // Extract the last two elements of the array
// const slicedFruits3 = fruits.slice(-2);
// console.log(slicedFruits3); // Output: ['date', 'elderberry']

// // Create a shallow copy of the array
// const shallowCopy = fruits.slice();
// console.log(shallowCopy); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// // ==========================================================================

// // Remove any element by index
// // array.splice(start, deleteCount, item1, item2, ...)
// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
// ];

// // Remove elements starting from index 2 (inclusive) to index 5 (exclusive)
// const removedElements = months.splice(2, 3);
// console.log(months); // Output: ['Jan', 'Feb', 'Jul', 'Aug', 'Sep', 'Oct']
// console.log(removedElements); // Output: ['Mar', 'Apr', 'May']

// // Replace elements starting from index 1 (inclusive) with new elements
// months.splice(1, 2, "February", "March");
// console.log(months); // Output: ['Jan', 'February', 'March', 'Aug', 'Sep', 'Oct']

// // Add new elements at index 4 (without removing any elements)
// months.splice(4, 0, "May");
// console.log(months); // Output: ['Jan', 'February', 'March', 'Aug', 'May', 'Sep', 'Oct']

// console.log(typeof arr);
// console.log(Array.isArray(arr));

// // ==========================================================================

// // Spread Operator
// console.log(...arr);

// console.log([arr[0], arr[1], arr[2], arr[3], arr[4], 5, 6, 7]);
// console.log([...arr, 5, 6, 7]);

// let newArr = arr; // Refernce is send
// arr.push("a");

// console.log(newArr);

// let newSpreadArr = [...arr]; // a copy of arr but a new array
// arr.push("b");
// console.log(arr);
// console.log(newSpreadArr);

// // ==========================================================================

// // Array Destructing
// let [first, second, third] = arr;
// console.log(second);

// // =============================
// // =========== OBJECT ===========
// // =============================

// const student = {
//   // { property : value}
//   name: "Ghost",
//   age: 20,
//   semester: 3,
// };

// console.log(student);

// // Spread Operator
// const updatedStudent = { ...student, home: "Dhaka" };
// console.log(updatedStudent);

// const updatedStudentSpread = { ...student };

// const std = student;
// student.rs = true;
// console.log(std);
// console.log(updatedStudentSpread);

// // Object Destructuring
// const { age } = student;
// console.log(age);

// // Access properties
// console.log(student.age);
// console.log(student[age]);

// // Delete
// delete student.age;
// // or
// delete student["age"];

// console.log(student);

// // Template literals (Template strings)
// console.log(`string text line 1
//  string text line 2`);

// let names = "Ghost";

// console.log(`Hi i am ${names}`);

// =============================
// =========== Function ===========
// =============================
function sum(x, y) {
  console.log(x, y);
  return x + y;
}

let result = sum(2, 3);
console.log(result);

//=====================
const sum1 = (x, y) => {
  console.log(x, y);
  return x + y;
};
console.log(sum1(2, 3));

//========================

const ihave = 50;

if (ihave >= 40) {
  console.log("Yes, I can buy");
} else {
  console.log("Sad, I cant buy");
}

ihave >= 40 ? console.log("Yes") : console.log("No");

arr = [1, 2, 3, 4, 5, 41];

arr.map((value) => {
  console.log(value);
});

const filteredValues = arr.filter((value) => value === 4); // return a array
console.log(filteredValues);

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
console.log(newArr);
function myFunction(num) {
  return num * 10;
}

const findValue = arr.find((value) => value === 41); // return 1st element that matches the condition
console.log(findValue);
