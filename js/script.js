// console.log("Hello Dear Customer");


// //A logistic software
// let name = prompt("What is the name of the product?");
// let weight = Number(prompt("What is the weight in Kg?"));
// let fragility = prompt("Is it fragile?");
// let distance = prompt("Where is the good(s) heading to?");

// console.log("your"+" "+name+" "+"is heading to"+" "+ distance);

// if (distance == "enugu") {
//     if (fragility == "yes"){
//         if (weight <= 5) {
//             let price = 500 + 100 + 1000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//             // let extraload be equal to weight above 5kg
//             let extraload = weight - 5;
//             let price = 500 + 1000 + (extraload * 50) + 100;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     } else {
//         if (weight <= 5) {
//             let price = 500 + 1000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//               // let extraload be equal to load above 5kg
//               let extraload = weight - 5;
//               let price = 500 + 1000 + (extraload * 50);
//               console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     }
// } else if (distance == "anambra") {
//     if (fragility == "yes"){
//         if (weight <= 5) {
//             let price = 500 + 100 + 2000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//             // let extraload be equal to load above 5kg
//             let extraload = weight - 5;
//             let price = 500 + 2000 + (extraload * 50) + 100;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     } else {
//         if (weight <= 5) {
//             let price = 500 + 2000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//               // let extraload be equal to load above 5kg
//               let extraload = weight - 5;
//               let price = 500 + 2000 + (extraload * 50);
//               console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     }
// } else if (distance == "abuja") {
//     if (fragility == "yes"){
//         if (weight <= 5) {
//             let price = 500 + 100 + 5000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//             // let extraload be equal to load above 5kg
//             let extraload = weight - 5;
//             let price = 500 + 5000 + (extraload * 50) + 100;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     } else {
//         if (weight <= 5) {
//             let price = 500 + 5000;
//             console.log("Your price is"+" "+ price +" "+"Naira");
//         } else {
//               // let extraload be equal to load above 5kg
//               let extraload = weight - 5;
//               let price = 500 + 5000 + (extraload * 50);
//               console.log("Your price is"+" "+ price +" "+"Naira");
//         }
//     }
// } else {
//     console.log("Sorry our services is not avaliable in"+" "+ distance);
// }

// let info = [];
// info["name"] = "Emmanuel";
// info["country"] = "Nigeria";
// info["gender"] = "Male";
// info["occupation"] = "Student";
// info["residence"] = "Abakaliki";
// console.log(info);


// let colors =
// {
//     Red: "Blood",
//     Orange: "Creativity",
//     yellow: "Sun",
//     Green: "Living",
//     Blue: "Sky",
// }
// console.log(colors);


// let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
// 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// let lettersFind = letters.findIndex(
//     function (value) {
//         return value === 'F'
//     }
// )

// console.log(lettersFind);


// let number = 1;
// while (number <= 20) {
//     console.log(number);
//     number++
// }

// let even = 1;
// while (even <= 20) {
//    if (even % 2 == 0) {
//        console.log(even);
//    }
//    even++
// }

// let odd = 1;
// while (odd <= 20) {
//     if (odd % 2 != 0) {
//         console.log(odd);
//     }
//     odd++
// }

// let number = [10,29,36,27,1,22,6,9,6,99,0,7,888];
// let count = 13

// while (count >= number.length-13) {

//     console.log(number[count]);
//     count--;
// }


// for (let number = 1; number <= 20; number++) {
//         console.log(number);
// }


// let num = Number(prompt("Please enter a number that can either be divided by 5, 3 or both"));

// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("FizzBuzz");
// } else if (num % 3 == 0) {
//     console.log("Buzz");
// } else if (num % 5 == 0 ) {
//     console.log("Fizz");
// } else{
//     console.log()
// }


// let Question1 = Number(prompt("How many continets has earth?"));
// let Question2 = Number(prompt("How many states has America?"));
// let Question3 = Number(prompt("How many percent of the earth is covered with water?"));
// let Question4 = prompt("Jack's Mum has four kids, North, East, West and ....?");
// let Question5 = prompt("Numbers that can only be divided by itself and one are called?");




// let Questions = [("How many continets has earth?"),("How many states has America?"), 
// ("How many percent of the earth is covered with water?"), ("Jack's Mum has four kids, North, East, West and ....?"), 
// ("Numbers that can only be divided by itself and one are called?")];

// let Answers = [7, 50, 70, "Jack", "Prime Numbers"];

// let myAnswer;
// let score = 0;
// let count = 0;

// while (count < Questions.length) {
//     myAnswer = prompt(Questions[count]);
//     if (myAnswer == Answers[count]) {
//         score = +2;
//     }
//     console.log("Your answer is" + " " + score)
// }

// while (count <= 12) {
//     let multiple = (3 * count);
//     console.log(`${3} * ${count} = ${multiple}`)

//     count++;

// }

// count = 1;

// while (count <= 12) {
//     let multiple5 = (5 * count);
//     console.log(`${5} * ${count} = ${multiple5}`)

//     count++;

// }

// let num = Number(prompt("Choose a number from 1 to 5"));

// for(let i = 2; i <= num; i++) {
//     let j = Number(prompt("Choose a number from 1 to 5"));
//     for(let j = 1; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// let count = 0;
// let person = {
//     name: "Chimdiebube",
//     age: 16,
//     complextion: "Not Fair",
//     dob: 11 - 11 - 2005,
//     address: "Ugwuachara",
//     stateoforigin: "Ebonyi State",
//     LGA: "Ohaukwu",
//     status: "Single",
//     education: [{ schoolname: "Great Minds Academy", address: "Olisaemeka Street" },
//     { schoolname: "RISA", address: "Democracy Estate" },
//     { schoolname: "hope", address: "Democracy Estate" }]
// }
// while (count <= (person.education.length - 1)) {
//     console.log(person.education[count].schoolname);

//     count++;
// }



// function add(a, b) {
//     sum = a + b;
//     console.log(sum);
// }

// add (300, 700);



// function minus(c, d) {
//     subtract = c - d;
//     console.log(subtract);
// }
// minus(40, 30);

// function value(r) {
//     area = (3.142 * (r)**2);
//     console.log(`The area is the circle radius ${r} is ${area} cm2`);
// }
// value(6);
// value(2);
// value(3);

// function numbers(a, b, c) {
//     if (a==b && a==c) {
//         console.log(`All numbers are equal, which is ${a}`);
//     } else if (a > b && a>c) {
//         console.log(`Your first number ${a} is the highest`);
//     } else if(b>a && b>c) {
//         console.log(`Your second number ${b} is the highest`);
//     } else if (c>a && c>b){
//         console.log(`Your third number ${c} is the highest`);
//     } else {
//         if (a==b) {
//             console.log(`your first number is equal to your second number`);
//         } else if(a==c){
//             console.log(`Your first number is equal to your third number`);
//         } else {
//             console.log(`Your second number is equal to your third number`);
//         }
//     }

// }
// numbers (Number(prompt("Input the first number")), Number(prompt("input second number")), Number(prompt("Input third number")));


// const pi = 3.142;

// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let thirdArray = [7, 8, 9];

// let myarray = [];

// function Array(firstArray, secondArray, thirdArray) {
//     let merge = [firstArray + " " + secondArray + " " + thirdArray];


//     return merge;
// }

// let merge = Array(firstArray, secondArray, thirdArray);
// console.log(merge);

// console.log(firstArray);

// let merged = [];

// function mergeArrays(arr1, arr2, arr3){

//     for(let i = 0; i < arr1.length; i++){
//         merged.push(arr1[i]);
//     }
//     for(let i = 0; i < arr2.length; i++){
//         merged.push(arr2[i]);
//     }
//     for(let i = 0; i < arr3.length; i++){
//         merged.push(arr3[i]);
//     }

// }

// mergeArrays([1,2,3],[4,5,6],[7,8,9]);
// console.log(merged);




// let merged = [];

// // function mergeArrays(arr1, arr2, arr3){

// //     for(let i = 0; i < arr1.length, i < arr2.length, i < arr3.length; i++){
// //         merged.sort(arr1[i], arr2[i], arr3[i]);
// //     }
// //     // for(let i = 0; i < arr2.length; i++){
// //     //     merged.push(arr2[i]);
// //     // }
// //     // for(let i = 0; i < arr3.length; i++){
// //     //     merged.push(arr3[i]);
// //     // }

// // }
// let joinedArray = merged.sort(
//     function merged(params) {

//     }
// )
// mergeArrays([1,2,3],[4,5,6],[7,8,9]);
// console.log(merged);


// function getTotalScore(cat1, cat2, exam) {


//     return cat1 + cat2 + exam;
// }

// function getGrade(getTotalscore = (a,b,c)) {
//     let total = getTotalscore(a,b,c);

//     if (total >= 50) {
//         console.log(`pass`);
//     } else {
//         console.log(`fail`);
//     }
// }

// getGrade(10, 20, 40);


// function range(min, max) {



//     return () => min + max;

// }

// const check = range(30, 70);

// console.log(check());

// ====================Assignment======================
// let amount = 2000;

// function balance(a, b, c, d) {

//     return () => a + b + c + d;
// }
// let remChange = balance(100, 130, 10, 10);
// console.log(remChange());

// if (remChange >= amount) {
//     console.log(`Your balance  is sufficient`);
// } else {
//     console.log(`Your balance  is insufficient`);
// }


// count = 1;
// multipleofArray = [];


// function multiple(num, length) {
//     while (count <= length) {
//         multipleofArray.push(num * count);

//         count++


//     } console.log(multipleofArray);

// }

// multiple(8, 11);
//===================================================================

// const nums = [4,3,2,5,6,78];
// console.log(Math.max(nums));
// console.log(Math.max(...nums));

// //=================================================================

// function test (...num){
//     let output = 1;
//     num.forEach(Element => {
//         output = output * Element
//     })
//     return output;
// }
// let result = test(...num);
// console.log(result);






// const Firstobject = [20, 30, 50];
// const SecondObject = [10, 70, 90]
// const mergedobjects = [...Firstobject,...SecondObject];
// const addedArrays = [];
// // =========================================================
// const subArray = [];
// function maths(...mergedobjects) {
//     output = 0;
//     mergedobjects.forEach(element => {
//         output = output + element
//     });
//     return output;
// }
// let results = maths(...mergedobjects);
// console.log(results);
// //..........................................................

//===============DESTRUCTURING ARRAYS=================================
// const UCLwinners = ['Bayern Munich', 'Manchester City', 'Real Madrid'];
// const [gold, silver, bronze] = UCLwinners;
// const [winner, ...runnerups] = UCLwinners;

// console.log(gold, silver, bronze);
// console.log(winner);
// console.log(runnerups);



//...........MY TRIAL..................
// let num1 = [2];
// let num2 = [5,6,8];
// let count = 1;

// function division(num1, num2) {
//     for (let count = 1; count <= num2.length; count++) {
//         let answer = (count * (num1))
//         return answer;
//     }
// }
// let results = division(num1, ...num2);

// console. log(results);


//=================DATE: 2/11/2022===============

//==========DOM (Document Object Model)============
// There are different ways of getting an Element through querySelector;
// Example: Using name => [document.querySelector("name")]
// Example: Using class => [document.querySelector(".class")]
// Example: Using Id => [document.querySelector("#Id")]
// Or by using [document.querySelectorAll("tagName")]




