// Types - int, double, string, boolen, array, object

// ====== Variables ========

a = 10;
console.log(a);

// Bad Practise - it can lead to unexpected behavior, especially in larger codebases where variable names might clash or be unintentionally overwritten.

// We use keyword - var, let, const

var b = 1;
let c = 1;
const d = 1;

// ======== Reassign ========

// Using var
var x = 10;
x = 20; // Reassigning the value of variable x
console.log(x); // Output: 20

// Using let
let y = 30;
y = 40; // Reassigning the value of variable y
console.log(y); // Output: 40

// Using const
const z = 50;
z = 60; // TypeError: Assignment to constant variable (cannot reassign const)
console.log(z);

// ======= Redeclare ==========

// Using var
var x = 10;
var x = 20; // Redeclaration of variable x with var, no error
console.log(x); // Output: 20

// Using let
let y = 30;
let y = 40; // SyntaxError: Identifier 'y' has already been declared

// Using const
const z = 50;
const z = 60; // SyntaxError: Identifier 'z' has already been declared

// ======= Block Scope ==========

// Using var
var x = 10;
if (true) {
  var x = 15;
  console.log(x); // Output: 10
}
console.log(x); // Output: 10 (var is function-scoped)

// Using let
let y = 20;
if (true) {
  let y = 25;
  console.log(y); // Output: 20
}
console.log(y); // ReferenceError: y is not defined (y is block-scoped)

// Using const
const z = 30;
if (true) {
  const z = 30;
  console.log(z); // Output: 30
  // z = 40; // TypeError: Assignment to constant variable (cannot reassign const)
}
console.log(z); // ReferenceError: z is not defined (z is block-scoped)

// ======= Hoisted ==========

// Using var
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20

// Using let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20

// Using const
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30
