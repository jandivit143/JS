// https://www.codingninjas.com/studio/library/javascript-boxing-and-unboxing

// In Javascript and other languages which are based on object-oriented programming, primitive values don't have
// any properties or methods. If you want to use them, you need to use a wrapper to convert them into object
// data types.
// Primitive data types are the simplest elements of a programming language. JavaScript has six primitive types:
// string, Number, boolean, null, undefined, and symbol, and everything else is an object.

// Autoboxing: Boxing is the process in which a primitive value is wrapped in an Object. When a primitive type
// is treated as an object, e.g., calling the toUpperCase() function, JavaScript would automatically wrap the
// primitive type into the corresponding object type.
//String primitive name
const name = "CODINGNINJA";
console.log(name.toLowerCase());
console.log(name.substring(1));

// Manual boxing
// let flag1 = new Boolean(true);
// if(flag1) { 
//     console.log("inside flag1")
// }
// let flag2 = new Boolean(false);
// // if(!flag2) {
// if(!flag2.valueOf()) {
//     console.log("inside flag2");
// }
// let flag3 = Object(false);
// // if(!flag3) {
// if(!flag3.valueOf()) {
//     console.log("inside flag3");
// }

// Unboxing: Unboxing is converting the reference or object types to basic or primitive data types. It is the
// opposite of boxing or packing.
// One of the easiest ways to convert the object wrapper to the respective primitive data type is to use the
// valueOf() method.
let flag4 = Object(false);
console.log(flag4 == false)
console.log(flag4 === false)
console.log(flag4.valueOf() == false)
console.log(flag4.valueOf() === false)

// Conclusion
// Boxing and unboxing are important and regularly used practices. But in different languages or different
// implementations, the wrapper can consume more memory and take more time to run the code than primitive
// types. But, if we talk about higher-level data structures, the wrappers are very useful. That also increases
// flexibility in your code.