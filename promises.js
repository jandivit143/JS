// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a === 2){
//         resolve('It\'s Success');
//         // console.log('Resolved');
//     }else{
//         reject('It\'s Failed');
//         // console.log('Failed');
//     }
// });

// p.then((message) => {
//     console.log('This is in the then ' + message);
// }).catch((message) => {
//     console.log('This is in the catch ' + message);
// })

// using callbacks
const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     }else{
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })

// same implementation of above code using promise
// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         }else if(userWatchingCatMeme){
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat'
//             })
//         }else{
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message);
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message);
// })

// promise methods
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
})

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages);
// })

// race returns as soon as the first promise resolves
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})