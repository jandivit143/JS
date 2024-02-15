const _ = require('lodash');
/**Shallow copy: changing the value of cloned object will reflect into original object as well because both
 * are pointing to same reference object.
 */
// shallow copy
// const a = {id:1, name: "Abhijith"}; // original object
// // cloning object a to b
// const b = a; // cloned object
// // change the id value of b object
// b.id = 5;
// console.log("A value",a);
// console.log("B value",b);

/**Deep copy: changing the value of cloned object will not reflect into original object because both are
 * pointing to different reference objects.
 */
// deep copy
let var1 = 4;
let var2 = var1;
var2 = 10;
console.log("var1 value",var1);
console.log("var2 value",var2);

// using spread operator we can make to have the objects their original value
// const a = {id:1, name: "Abhijith"}; // original object
// // cloning object a to b
// const b = {...a}; // cloned object
// // change the id and name value of b object
// b.id = 5;
// b.name = "Leela";
// console.log("The A value",a);
// console.log("The B value",b);

// using Object.assign operator we can make to have the objects their original value
// const a = {id:1, name: "Abhijith"}; // original object
// // cloning object a to b
// const b = Object.assign({},a); // cloned object
// // change the id and name value of b object
// b.id = 5;
// b.name = "Leela";
// console.log("The a value is",a);
// console.log("The b value is",b);

// if we have nested object, we can use json.parse and json.stringify
// const a = {id:1, name: "Abhijith", address: {flatNo: 104}}; // original object
// // cloning object a to b
// const b = JSON.parse(JSON.stringify(a));
// // change the id and name value of b object
// b.id = 5;
// b.name = "Leela";
// b.address.flatNo = 404;
// console.log("The a value is",a);
// console.log("The b value is",b);

// if we have function or date object inside a object, we have to use a 3rd party library 'lodash'
const developer1 = {
    id:1,
    name: "Abhijith",
    address: {flatNo: 104},
    calculateAge: function (params) {
        return 25;
    },
    joiningDate: new Date()
}; // original object
// cloning object a to b
const developer2 = _.cloneDeep(developer1);
developer2.id = 2;
developer2.name = "Arpit";
console.log("The a value is",developer1);
console.log("The b value is",developer2);

// array
// const arr1 = [1,2,3];
// // const arr2 = arr1;
// const arr2 = [...arr1];
// arr2[0] = 5;
// console.log("Arr1",arr1);
// console.log("Arr2",arr2);