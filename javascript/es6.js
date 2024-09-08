// ---------------es5-variables------------

// var a = "zubair";
// a = "zubair2"
// console.log(a)

// let FirstName = 'zubair';
// FirstName = "shaikh"
// console.log(FirstName)
// const LastName = 3.149
// LastName = "shah"
// console.log(LastName)


// function printMyName() {
//     if (true) {
//         var Name = "zubair"
//         // var Name = "shaikh"
//         console.log(Name)
//     }
//     // console.log(Name)
// }
// printMyName()

// function printMyName() {
//     // let Name = "zubair"
//     if (true) {
//         let Name = "zubair"
//         // const Name = "zubair"
//         console.log(Name)
//     }
//     console.log(Name)
// }
// printMyName()





// =====================template-literals================


// let firstName = "Zubair"
// let lastName = "Shaikh"
// let age = 22;

// console.log("I am" + " " + firstName + " " + lastName + "\n" + "I am " + age + " years old")

// console.log(`I am ${firstName} ${lastName}
// I am ${age} years old`)


// ===========arrow functions =======

// function sum(){

// }
// let value1 = +prompt("enter value 1:")
// let value2 = +prompt("enter value 1:")

// let sum = function (a, b) {
//     return a + b
// }
// console.log(sum(value1, value2))

// const sumWithArrowFunction = ((a, b) => {
//     let c = a + b
//     return c / 2
// });
// console.log(sumWithArrowFunction(value1, value2))

let myFavouriteProgLang = ["javascript", "python", "C++", "Java", "Typescript"]

// let top1 = myFavouriteProgLang[0]
// let top2 = myFavouriteProgLang[4]
// let top3 = myFavouriteProgLang[1]
// let [, , , top4, top5] = myFavouriteProgLang;
// console.log(`My 1st Favourite Prog lang ${top4} and second favr is ${top5}
// `)


// let myData = {
//     name: "zubair",
//     age: 23,
//     lastQA: "Bscs",
//     hobby: {
//         first: "reading",
//         second: "programming"
//     }

// }

// let { name, age, hobby } = myData;


// console.log(`My name is ${name} and my Age is ${age} and my first hobby is ${hobby.first}`)


// ================spread operator==================
// let arr1 = [1, 2, 3]
// let arr2 = [6, 7, 8]


// let mergeArray = [...arr1, 4, 5, ...arr2]

// let mydata = {
//     name: "zubair",
//     age: 23,
//     lastQA: "Bscs",

// }
// let myHobby = {
//     first: "reading",
//     second: "programming"
// }

// let completeData = {

//     ...mydata,
//     hobby: { ...myHobby }
// }
// console.log(completeData)


// ================Rest Parameter ==================

// function sum(a, b, ...c) {
//     // let sum = a + b + c;
//     let sum = a + b;
//     for (let i = 0; i < c.length; i++) {
//         sum += c[i]
//     }
//     console.log(sum)
// }

// sum(5, 5, 10, 10, 20, 40)
//     (resolve, reject) => {

//     setTimeout(() => {
//         let rollno = undefined;
//         if (rollno === undefined) {
//             reject("error with communicating with database")
//         }

//     }, 2000)

// }



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let peseWapis = prompt("apke pese milgaen:");
//         if (peseWapis === "yes") {
//             resolve("pese successfully recieved")
//         } else {
//             reject("pese nhi diye poice complain karna he")
//         }
//     }, 1000)
// })

// console.log(promise1)

// promise1.then((message) => {
//     alert(message)
//     console.log(message)
// }).catch((error) => {
//     alert(error)
//     console.log(error)
// })



// promise1.then((item) => {

// }).catch((message) => {
//     console.log(message)
// })


// =================Async and Await ============

// console.log("hello 1")

// for (let i = 0; i < 1000000; i++) {
//     console.log("A")
// }

// console.log("hello 2")

async function fetchGithubUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    if (users) {
        return users
    }

}
let usersData = fetchGithubUsers()
usersData.then((data) => {
    alert(data[0].name)
}).catch((error) => {
    console.log(error)
})