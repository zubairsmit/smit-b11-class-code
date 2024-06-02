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
let std1 = ['zubair', 'junaid', 'owais'];
function pushNewStudent() {
    // let newStdName = prompt("Please Enter new student Name:")
    // std1.push(newStdName)  //add from last
    // std1.unshift(newStdName)  // add from first


}
function removeNewStudent() {

    // std1.shift()  // remove from first
    std1.pop()  // remove from last
    console.log(std1)
}
console.log(std1)