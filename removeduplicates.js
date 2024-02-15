// using set() method: It allows us to create collection of unique values
// let arr = ["apple", "mango", "apple",
// 		"orange", "mango", "mango"];

// function removeDuplicates(arr) {
// 	return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// using forEach() method
// let arr = ["apple", "mango",
// 		"apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
// 	let unique = [];
// 	arr.forEach(element => {
// 		if (!unique.includes(element)) {
// 			unique.push(element);
// 		}
// 	});
// 	return unique;
// }
// console.log(removeDuplicates(arr));

const users = [
    {
        name: "Abhijith",
        age: 25,
        gender: "male"
    },
    {
        name: "Leela",
        age: 52,
        gender: "female"
    },
    {
        name: "Abhijith",
        age: 25,
        gender: "male"
    }
]
const unique = users.filter((obj, index) => {
	return index === users.findIndex(o => obj.name === o.name);
});
console.log(unique);