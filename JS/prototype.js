// https://www.tutorialsteacher.com/javascript/prototype-in-javascript

// In the below example, age property is attached to studObj1 instance. However, studObj2 instance will not
// have age property because it is defined only on studObj1 instance. So what to do if we want to add new
// properties at later stage to a function which will be shared across all the instances?
// The answer is 'Prototype'
// function Student() {
//     this.name = 'John';
//     this.gender = 'Male';
// }

// var studObj1 = new Student();
// studObj1.age = 15;
// console.log(studObj1.age); // 15

// var studObj2 = new Student();
// console.log(studObj2.age); // undefined

// prototype example
function Student() {
    this.name = 'Kunal';
    this.gender = 'M';
}

Student.prototype.age = 65;
Student.prototype.city = 'Hyderabad';

var studObj1 = new Student();
console.log(studObj1.age); // 65
console.log(studObj1.city); // Hyderabad

var studObj2 = new Student();
console.log(studObj2.age); // 65
console.log(studObj2.city); // Hyderabad

// https://www.youtube.com/watch?v=wstwjQ1yqWQ&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=8
let arr = ["Abhijith", "Leela"];