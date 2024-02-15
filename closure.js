// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// A closure gives you access to an outer function's scope from an inner function.
function initPart(){
    var name = "Abhijith";
    function displayName(){
        console.log('name is',name);
    }
    displayName();
}
initPart();

// function makeFunc() {
//     const name = "Leela";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// console.log(typeof myFunc);
// myFunc();

// another example for closure
// function add(a,b){
//     if(!b){
//         return function (c){
//             return a + c;
//         }
//     }
//     return a + b;
// }
// console.log(add(3)(3));
// console.log(add(3,3));

// function add(a,b,c){
//     if(!b || !c){
//         return function (d){
//             return a + d;
//         }
//     }
//     return a + b + c;
// }
// console.log(add(2)(9));
// console.log(add(2,3,4));