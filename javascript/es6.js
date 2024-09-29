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

// async function fetchGithubUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     console.log(response)
//     console.log(users)
//     if (users) {
//         return users
//     }

// }
// let usersData = fetchGithubUsers()
// usersData.then((data) => {
//     // alert(data[0].name)
// }).catch((error) => {
//     console.log(error)
// })

// let jsonData = '{"name":"John", "age":30, "city":"New York"}';
// let objData = JSON.parse(jsonData)



// let jsonData = [
//     {
//         "name": "Adeel Solangi",
//         "language": "Sindhi",
//         "id": "V59OF92YF627HFY0",
//         "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
//         "version": 6.1
//     },
//     {
//         "name": "Afzal Ghaffar",
//         "language": "Sindhi",
//         "id": "ENTOCR13RSCLZ6KU",
//         "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
//         "version": 1.88
//     }
// ]

// console.log(jsonData[0].name)

// let myInfo = {
//     name: "zubair",
//     age: 12,
//     city: "karachi"
// }
// console.log(objData)
// let jsonDatatoSend = JSON.stringify(myInfo);
// console.log(jsonDatatoSend)


// console.log(jsonData)

// console.log(objData.name, objData.age, objData.city)
// var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


// let myText = "I am Zubair Shaikh my age is 22 and my current semester is 7";
// let pattern = /zubair|7/ig;
// let find = myText.match(pattern);
// console.log(find)

const numbers = [4, 9, 16, 25];


// let result = numbers.map((data, index) => {
//     // console.log(data + 1)
//     if (index === 2) {
//         data = data + 1
//     }
//     console.log(data, index)
//     return data
// })
// console.log(result)


// let result2 = numbers.forEach((element, index) => {
//     if (index === 2) {
//         element = element + 1;
//     }
//     console.log(element)
// });
// console.log(result2)
// console.log(numbers)

// let ages = [17, 23, 15, 26];

// let result3 = ages.filter((age) => {

//     if (age >= 18) {
//         return age;
//     }
//     console.log(age)
// })
// console.log(result3)


// let result4 = ages.find((age) => {

//     if (age >= 18) {
//         return age;
//     }
// })
// console.log(result4)

// debugger;


// let val = 5;
// val += adder()
// val += adder()
// val += adder()
// console.log(val)
// function adder() {
//     let counter = val;
//     for (let i = 0; i < val; i++) {
//         counter++
//     }
//     if (counter == 10) {
//         return undefined
//     }
//     return counter;
// }
// debugger;

// const output = document.getElementById('output');
// const emaiVal = document.getElementById('email');
// const btn = document.getElementById('check-btn');
// const emailCheckPattern = /([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z0-9]+)\w+/;
// var passwordValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// btn.addEventListener("click", (e) => {
//     const value = emaiVal.value;
//     const result = emailCheckPattern.test(value)
//     let response = '';
//     if (!result) {
//         response = "Invalid Email";
//         output.style.color = "red"
//     } else {
//         response = "Valid Email";
//         output.style.color = "green"
//     }
//     output.textContent = response;
//     console.log(result)
// })



async function fetchGithubUsers() {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        }),
    })
    const users = await response.json()
    console.log(response)
    console.log(users)
    if (users) {
        return users
    }

}
let usersData = fetchGithubUsers()
usersData.then((data) => {
    console.log('data', data)
    if (data) {
        localStorage.setItem('token', data.accessToken)
        let token = localStorage.getItem('token')
        if (token) {
            location.href = './dashboard.html'
        }
        console.log(token)
    }
    // alert(data[0].name)
}).catch((error) => {
    console.log(error)
})