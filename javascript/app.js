// let name = "zubair";
// name = "shaikh";
// var name2 = "zubair";
// name2 = "shaikh";
// console.log(name)
// console.log(name2)
// const name3 = "zubair";
// name3 = "shaikh";
// console.log(name3)


// let fullName = 'zubair shaikh';   //data type string 
// let fullName2 = "zubair shaikh";   //data type string 

// let age = 23;  // data type Number;
// let isMarried = true;  // data type boolean

// let ispass = undefined; // undefined;
// let isFeesPaid = null;  // null 


// let stringNumber = "1234"

// console.log(typeof fullName)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof stringNumber)


let num1 = 22;
let num2 = 33;
let num3 = "12";
// console.log(num1 + num2)
// console.log(num2 - num1)
// console.log(num3 * num2)
// let $name = "ali"
// let _$name2 = "ali"
// let 2name = "ali"   //error
// let name = 'ali';
// let NAME = 'ali';
// let FullName = 'ali';
// let fullName = 'ali';
// console.log($name)

// var popularNumber1 = (2 * 4) * 4 + 2;
// var popularNumber2 = 12 - 24;
// var popularNumber3 = 12 * 24;
// var popularNumber4 = 12 / 24;
// var popularNumber5 = 5 % 2;
// console.log(popularNumber1)
// console.log(popularNumber2)
// console.log(popularNumber3)
// console.log(popularNumber4)
// console.log(popularNumber5)

// let number = 1;
// console.log(number++ + number++)  //
// console.log(number)
// console.log(--num)

// let resultOfComputation = ((2 * 4) * 4) + 2;
// console.log(resultOfComputation)



// let name1 = prompt("Enter your Name: ")
// let message = alert("Welcom! " + name1)
// console.log(name1)

// function printAlert() {
//     alert("welcome to my site")
// }


// ============if else==========================

// let gender = prompt("enter your gender");
// console.log('gender' , gender)
// if(gender == "male"){
//  alert("You are allowed to enter in graveyard")
// }
// else if(gender == "female"){
//     alert("you are not allowed to enter ")
// }
// else{
//  alert("please enter a valid gender")
// }
// function calulateResult() {
//     let userNumber = document.getElementById('number').value
//     let calculatedPercentage = userNumber / 750 * 100;  //106
//     console.log(calculatedPercentage)
//     if (calculatedPercentage >= 80 && calculatedPercentage <= 100) {
//         alert("You got A+ congrats")
//     }
//     else if (calculatedPercentage >= 70 && calculatedPercentage < 80) {
//         alert("You got A congrats")
//     }
//     else if (calculatedPercentage >= 60 && calculatedPercentage < 70) {
//         alert("You got B congrats")
//     }
//     else if (calculatedPercentage >= 50 && calculatedPercentage < 60) {
//         alert("You got C congrats")
//     }
//     else if (calculatedPercentage < 50) {
//         alert("You are fail")
//     }
//     else {
//         alert("please enter a valid input")
//     }
//     // console.log(userNumber)
//     // console.log(percentage)
// }


// let age = 13;
// let resident = 'pakistani';
// let gender = 'female';

// if (resident == "pakistani" || gender == "male") {

//     alert("welcome to dubai!")
//     if (age > 18) {
//         alert(" you can drive cars in dubai")
//     } else {
//         alert(" you can't drive cars in dubai")
//     }
// }

// ===================arrays =======================

// let array = [];
// let class1Std = ['zubair', 'junaid', 'owais'];
// let class2Std = ['amir', 'sahir', 'mustaqeem'];
// let std1 = [];

// let stds = [
//     ['zubair', 'junaid', 'owais'],
//     ['amir', 'sahir', 'mustaqeem']
// ]

// function pushNewStudent() {
// let newStdName = prompt("Please Enter new student Name:")
// let newStdName = document.getElementById("number").value
// std1.push(newStdName)  //add from last
// console.log(std1)
// std1.unshift(newStdName)  // add from first
// }
// console.log(std1)
// function removeNewStudent() {

//     std1.shift()  // remove from first
//     // std1.pop()  // remove from last
//     console.log(std1)
// }
// console.log(std1[2])
// console.log(stds)

// console.log(stds[0][1], stds[1][2])


// ---------------slice----------------

// const fruits = ["Banana", 14, "Orange", "Lemon", "Mango"];
// let index_value_of_Samsung = fruits.indexOf(14);
// console.log(index_value_of_Samsung)
// const newFruits = fruits.slice(index_value_of_Samsung)
// console.log(newFruits)


// let friends = [
//     ["zohaib", "azmat"],
//     ["amir", "Ansari"],
//     [
//         ["naveed", "mustafa", "qasim", "sultan"]
//     ]
// ];

// let myFriends = friends[2][0].slice(1, 3)
// console.log(myFriends);

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

// const newArray = ["Banana", "Orange", "Apple", "Mango",
//     [
//         ["Milk", "yougart", "Butter"]
//     ]
// ];
// let deletedItem = newArray[4][0].splice(1, 1, "Eggs", "Slice")

// console.log(deletedItem)
// console.log(newArray)


// ---------------------for loops ------------------------

// for (let i = 0; i < 10; i++) {
//     console.log("zubair", i)
// }

// let variable1 = "I AM ZUBAIR SHAIKH";
// console.log(variable1.toLowerCase())
// let variable1 = "I AM ZUBAIR SHAIKH";
// console.log(variable1)
let firstChar = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo laudantium a debitis.World War II Eum quidem beatae ratione, at, quos repellendus enim est quod laboriosam consequatur molestias velit debitis quam illum distinctio animi,World War II deserunt reprehenderit?"
let foundVariable = firstChar.indexOf("World War II")
console.log(foundVariable)
if (foundVariable == -1) {
    alert("character not found")
} else {

    let newText = firstChar.replaceAll("World War II", "the Second World War");
    console.log(newText)
}
// console.log(firstChar.indexOf("World War II"))
// console.log(firstChar.lastIndexOf("World War II"))
// console.log(firstChar.charAt(238))


// function palindromChecker(){
//     let str = 
// }

// let a = 13;
// let b = 13;
// console.log(Number(a) + Number(b))
// console.log(String(a) + String(b))

// let c = 3.3334235;
// console.log(c.toFixed(3))

// let rightNow = new Date();
// console.log(new Date());
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[rightNow.getDay()])
// console.log(rightNow.getDate())
// console.log(rightNow.getFullYear())
// console.log(rightNow.getMinutes())
// console.log(rightNow.getTime())
// console.log(rightNow.getHours())


// ========function=====
// let a = +prompt("enter number 1")
// let b = +prompt("enter number 2")
// let c = +prompt("enter number 3")

// function calculateResult(num1,num2,num3) {
//    var result = num1 + num2 + num3;
//    let zubair = 'zubair';
//    if(result === 100){
//     var newNumber2 = 1000;
//     console.log(zubair)
//    }
//    console.log(newNumber2)
//    console.log(newNumber)
//    console.log(zubair)



//    return 100;
// }

// console.log(zubair)
// let num4 = 100;
// let finalResult = num4 - calculateResult(a,b,c)

// console.log(finalResult)

// let dayOfWeek = "Mon";

// switch(dayOfWeek){
//  case "Sun":
//     alert("Whoopee");
//     console.log('a')
//     console.log('cv')
//     console.log('asd')
//     break;
//  case "Mon":
//     alert("it's weekday")
//     break;
//  case "Sat":
//     alert("it's weekend")  
//      break;
//  default :
//   alert("No Match")
// }

// let number = 4;
// switch(true){
//     case (number >= 5 && number < 10):
//         alert("it's between 5 to 10")
//     default :
//      alert("no match")
// }


for (let i = 0; i < 10; i++) {
    console.log('zubair', i)
}

// let i = 0;
// while(i < 0){
//     console.log('zubair' , i)
//     i++;
// }

// let j = 0;
// do{
//     console.log('zubair' , j) 
//     j++;
// }while(j < 0)



// ==========Objects in javascript =========


let plan1 = {
    name: "Basic Plan",
    price: 3.99
}
plan1.space = 100;
// console.log(plan1)
// console.log(plan1.price)
// console.log(plan1["name"])


// let std1 = {
//     name:'zubair',
//     seatno:"eb201212",
//     department:"ubit",
//     isFeeSubmit: true,
//    subjects:["pak" , "urdu" , "eng" , "math"]
// }
//  std1.subjects.push("computer science")
//  console.log(std1)
// let stdSubjects = std1.subjects.length;
// for(let i=0; i < stdSubjects; i++){
//      console.log(std1.subjects[i] , i)
// }

let studentsInfo = [
    {
        name: 'zubair',
        seatno: "eb201212",
        department: "ubit",
        isFeeSubmit: true,
        subjects: ["pak", "urdu", "eng", "math"]
    },
    {
        name: 'usman',
        seatno: "eb201212",
        department: "ubit",
        isFeeSubmit: false,
        subjects: ["pak", "urdu", "eng", "math"]
    }
]

// let element = document.getElementsByTagName("h1")
// let elementwithId = document.getElementById("second")
// console.log(element)
// console.log(elementwithId)


function changeColor() {
    let elementwithId = document.getElementById("shape").classList.toggle("hide");
    // elementwithId.setAttribute("style", "background-color:red;")
    // elementwithId.setAttribute("class", "circle square")
    console.log(elementwithId)

}

