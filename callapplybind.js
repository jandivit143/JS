let myName = {
    firstName: "Abhijith",
    lastName: "Chowdary",
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}
// myName.printFullName();
let name2 = {
    firstName: "Kunal",
    lastName: "Ray",
}
// function borrowing
// myName.printFullName.call(name2);

// (or)

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}
// call
// printFullName.call(myName);
printFullName.call(myName, "Hyderabad", "Telengana");
// printFullName.call(name2)
printFullName.call(name2, "Kolkata", "West bengal");

// apply
let name3 = {
    firstName: "Harika",
    lastName: "Ragir"
}
printFullName.apply(name3, ["Secunderabad", "Telangana"]);

// bind
let printMyName = printFullName.bind(name3, "Hyderabad-500050", "Telangana"); // the difference b/w call and bind is bind returns a copy(function) which can be invoked later
console.log('my name is', printMyName);
printMyName();