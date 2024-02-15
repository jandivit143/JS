/**Local storage is the most recent mechanism. It allows for larger amounts of data to be stored, but the data
 * is not deleted when the browser is closed. Local storage is useful for storing data that the user will need
 * to access later, such as offline data. */

localStorage.setItem("hello", "world");
localStorage.setItem("hello", "world2"); // it overrides the value of hello key
localStorage.setItem("hello2", "world2");
localStorage.getItem("hello"); // gets the value of hello key
localStorage.removeItem("hello2"); // removes the item(key and value)
localStorage.clear(); // clears the localStorage(makes empty)

// to store object in the localStorage
const user = {name: "Abhijith"};
localStorage.setItem("user", JSON.stringify(user));

// to get the object from the localStorage
JSON.parse(localStorage.getItem("user"));