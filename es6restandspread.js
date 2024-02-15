// With array
// ES6 REST
function addNumbers(a,b,c,...other){
    console.log(arguments); // ES5
    console.log(other); // ES6
    return a + b + c;
}
const res = addNumbers(2,5,6,8,9);
console.log(res);

// SPREAD
var names = ["Abhijith", "Leepika", "Leela", "Narayana"];

function getNames(name1,name2,name3, name4){
    console.log(name1, name2, name3, name4);
}
// getNames(names[0],names[1],names[2]); // don't pass like this
getNames(...names); // best way
getNames(names);


// With object
// REST
var student = {
    name: "Abhijith",
    age: 25,
    hobbies: ["Cricket", "Cooking"]
}
// const age = student.age;
// const {hobbies, age, name} = student; // object destructuring
// console.log('Name, Age and Hobbies are', name, age, hobbies);
const {age, ...rest} = student;
console.log('rest are', rest);

// SPREAD
var newStudent = {
    ...student,
    age: 26
}
console.log("newStudent is", newStudent);