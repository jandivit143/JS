// const names = ["Kunal Ray", "Aparna Ray", "Laxmi Narayana", "Leepika Chowdary", "Abhijith Chowdary"];
// for(let i = 0; i < names.length; i++){
//     console.log(i + 1 + ", Hello, I am "+names[i]);
// }

// console.log(typeof null);
// console.log(typeof undefined);

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    console.log(this);
});

btn.addEventListener('click', function clickHandler() {
    console.log(this);
});