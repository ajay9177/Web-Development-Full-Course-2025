// ===============================
// 1. VARIABLES (let, const, var)
// ===============================

// "let" → block-scoped, can be reassigned but not redeclared in the same scope
let name = "Ajay";
let age = 20;

if (true) {
    let c = 90; // c is block-scoped, accessible only inside this block
}
// console.log(c); // ❌ Error: c is not defined

age = 30; // allowed (reassignment)
console.log(name, age); // Ajay 30

// "const" → block-scoped, must be initialized, cannot be reassigned
const account = 1234;
// account = 23; // ❌ Error: Assignment to constant variable

console.log(account);

// "var" → function-scoped, can be redeclared (NOT recommended in modern JS)
var a = 10;
var a = 15; // ✅ allowed
if (true) {
    var a = 20; // function-scoped, overrides outer "a"
}
function fun() {
    var c = 20; // function-scoped, not accessible outside
}
var b = 30;

console.log(a); // 20 (value changed inside if block)
// console.log(c); // ❌ Error: c is not defined (scoped to function)

// 🔑 Summary:
// - let → block-scoped
// - const → block-scoped, cannot be reassigned
// - var → function/global scoped, allows redeclaration (avoid it)


// ===============================
// 2. DATA TYPES
// ===============================

// Primitive Data Types → immutable, passed by value
// number, string, boolean, undefined, null, bigint, symbol

// --- number ---
let num1 = 10;
let num2 = 2.36;
console.log(typeof num1); // number

// --- string ---
let str1 = "Strike is coming";
let str2 = 'Ajay';
console.log(str1, str2);
console.log(typeof str2); // string

// --- boolean ---
let login = true;
let isAdmin = false;
console.log(login, isAdmin);
console.log(typeof isAdmin); // boolean

// --- undefined ---
let user; // declared but not initialized
console.log(user); // undefined
console.log(typeof user); // undefined

// --- bigint ---
let bigNum = 23413489499599905n; // append "n" to make bigint
console.log(bigNum);
console.log(typeof bigNum); // bigint

// --- null ---
let weather = null;
console.log(weather); // null
console.log(typeof weather); // object (quirk in JS)

// --- symbol ---
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(typeof id1); // symbol
console.log(id1 === id2); // false (unique even with same description)


// ===============================
// 3. NON-PRIMITIVE DATA TYPES
// ===============================
// These are mutable and passed by reference
// array, object, function

// --- array ---
let arr = [10, 20, 11, "Ajay", true];
console.log(arr);
console.log(typeof arr); // object

// --- object ---
let userObj = {
    name: "Ajay",
    account: 12312,
    age: 18,
    category: 'gen'
};
console.log(typeof userObj); // object

// --- function ---
function add() {
    console.log("Hello");
}
add();

let s = function sub() {
    console.log("Hi");
};
s();

console.log(typeof s); // function (actually "object function")


// ===============================
// 4. PASS BY VALUE vs PASS BY REFERENCE
// ===============================

// 🔹 Primitive values → immutable, stored in stack, passed by value
let a1 = 10;
let b1 = a1; // copy of value
b1 = 20;    // only b1 changes
console.log(a1, b1); // 10 20

a1 = 20; // reassigns a1 (new memory allocation)
console.log(a1); // 20

// String immutability
let str = "ajay";
str = "ajay1"; // new memory block created
console.log(str); // ajay1

// Trying to modify string character
str[0] = "M"; 
console.log(str); // still "ajay1" (strings immutable)
console.log(str[1]); // j

// 🔹 Non-Primitives → mutable, stored in heap, passed by reference

// Example with array
let arr1 = [10, 20, 30, 40];
arr1.push(90);    // modifies original array
arr1[0] = 70;     // modifies in place
console.log(arr1); // [70,20,30,40,90]

// Example with object
let obj = {
    name: "Ajay",
    age: 20
};

let obj2 = obj; // obj2 references same memory
obj2.name = "Teja"; // change reflects in obj
console.log(obj);   // { name: "Teja", age: 20 }

// 🔑 Summary:
// - Primitives → Pass by Value → independent copies
// - Non-Primitives → Pass by Reference → changes affect all references

