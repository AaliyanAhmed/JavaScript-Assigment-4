 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Chapter 9-11~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 // **********Question 1**********
// let City = prompt('Enter Your City Name');
// if(City === 'Karachi'){
// alert('Welcom to City of Light')
// }

// **********Question 2**********
// let Gender = prompt(`Enter Your Gender`);
// if(Gender === `Male`){
//     alert(`Good Morning Sir`)
// }
// if(Gender === `Female`){
// alert(`Good Morning Ma’am`)
// }

// **********Question 3**********
// let signal = prompt("Enter traffic signal color: ");
// if (signal === "Red") {
//   alert("Stop");
// } else if (signal === "Yellow") {
//   alert("Ready to move");
// } else if (signal === "Green") {
//   alert("Go");
// }

// **********Question 4**********
// let fuel = parseFloat(prompt("Enter remaining fuel in litres: "));
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }
// else{
//     alert("the fuel in your car");
// }

// **********Question 5**********
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// **********Question 6**********
// function calculateGrades() {
//     let marks1 = parseFloat(document.querySelector("#subject1").value);
//     let marks2 = parseFloat(document.querySelector("#subject2").value);
//     let marks3 = parseFloat(document.querySelector("#subject3").value);
//     let totalMarks = parseFloat(document.querySelector("#totalMarks").value);

//     let obtainedMarks = marks1 + marks2 + marks3;
//     let percentage = (obtainedMarks / totalMarks) * 100;

//     let Grade = prompt("Enter Your Number")
    
//     if (percentage >= 80) {
//         alert = "A+";
//     } else if (percentage >= 70) {
//         alert = "A";
//     } else if (percentage >= 60) {
//         alert = "B";
//     } else if (percentage >= 50) {
//         alert = "C";
//     } else {
//         alert = "F";
//     }

//     document.write("#percentage").textContent = percentage + "%";
//     document.write("#grade").textContent = Grade;
// }

// **********Question 7**********
//  **********Gues Game**********
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10)"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (Math.abs(userGuess - secretNumber) <= 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again");
// }

// **********Question 8**********
// let number = parseInt(prompt("Enter a number:"));

// if (number % 3 == 0) {
//     alert(`${number} is divisible by 3`);
// } else {
//     alert(`${number} is not divisible by 3`);
// }

// **********Question 9**********
// let number = parseInt(prompt("Enter a number:"));

// if (number % 3 == 0) {
//     alert(`${number} is an odd number`);
// } else {
//     alert(`${number} is an even number`);
// }
// ************Question10********
// let temperature = parseInt(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so cool.");
// } else {
//     alert("The temperature is below 10, it might be too cold outside.");
// }
// *************Question11************
// var firstNumber = parseFloat(prompt("Enter the first number: "));
// var secondNumber = parseFloat(prompt("Enter the second number: "));
// var operation = prompt("Enter the operation (+, -, *, /, %): ");

// if (operation === "+") {
//   alert(firstNumber + secondNumber);
// } else if (operation === "-") {
//   alert(firstNumber - secondNumber);
// } else if (operation === "*") {
//   alert(firstNumber * secondNumber);
// } else if (operation === "/") {
//   alert(firstNumber / secondNumber);
// } else if (operation === "%") {
//   alert(firstNumber % secondNumber);
// } else {
//   alert("Invalid operation!");
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Done~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Chapter 12-13~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// **********Question 1**********
// var char = prompt("Enter a character: ");
// if (isNaN(char)) {
//   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     alert("Uppercase letter");
//   } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     alert("Lowercase letter");
//   } else {
//     alert("Not a letter");
//   }
// } else {
//   alert("Number");
// }


// **********Question 2**********
// let num1 = parseInt(prompt("Enter first integer:"));
// let num2 = parseInt(prompt("Enter second integer:"));

// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
//   } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
//   } else {
//     console.log(num1 + " and " + num2 + " are equal");
//   }


// **********Question 3**********
// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//   console.log(num + " is positive");
// } else if (num < 0) {
//   console.log(num + " is negative");
// } else {
//   console.log(num + " is zero");
// }


// **********Question 4**********

// let char = prompt("Enter a character: ");

// if (char.length > 1) {
//     console.log("Please enter a single character.");
// } else {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//         char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//         console.log("It's a vowel.");
//     } else {
//         console.log("It's not a vowel.");
//     }
// }


// **********Question 5**********
// var correctPassword = "123";

// var userPassword = prompt("Please enter your password:");

// if (!userPassword) {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }


// **********Question 6**********
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// **********Question 7**********
// var time = prompt("Enter time in 24 hour format (e.g. 1900 for 7pm):");
// var greeting;

// if (time >= 0000 && time < 1200) {
//   greeting = "Good Morning!";
// } else if (time >= 1200 && time < 1700) {
//   greeting = "Good Afternoon!";
// } else if (time >= 1700 && time < 2100) {
//   greeting = "Good Evening!";
// } else if (time >= 2100 && time <= 2359) {
//   greeting = "Good Night!";
// } else {
//   greeting = "Invalid time format.";
// }
// console.log(greeting)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Done~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~