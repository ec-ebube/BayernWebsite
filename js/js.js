// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let allhigherthanNine = numbers.every(
//     function (value) {
//         return value > 0;
//     }
// )
// console.log(allhigherthanNine);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function add(total, value, index, array) {
//     return total + value;
// }

// let sum = numbers.reduce(add);
// console.log(sum);

// let message = " Hello \n World"
// message = message.trim();

// let uppercase = message.toUpperCase();
// console.log(message);


// let hello = message.slice(0,5);
// message = message.replace("World", "Emeka");
// console.log(hello);


// let cat = 10;
// let exam = 70;
// let totalscore = cat + exam;
// console.log(`The cat score is ${10} \n and exam score is ${70},\n the total is ${80}`)


// let name = prompt("What's your name?");
// let age = prompt("How old are you?");
// let  = Number(prompt("What's the numerical value of your IQ?"));


// const PI = Math.PI.toFixed(2);
// console.log(PI);

// let random = Math.random().toFixed(1)*10;
// console.log(random);

// let min = Math.min(1, 5, 10, 0.3, 50);
// let max = Math.max(1, 5, 10, 0.3, 50);
// console.log(min, max);

// let power = Math.pow(4, 2);
// let squareroot = Math.sqrt(16);
// console.log(power, squareroot);

// let floor = Math.floor(32.45);
// console.log(floor);

// let round1 = Math.round(3.8);
// let round2 = Math.round(3.4);
// console.log(round1, round2);





// let num = Number(prompt("Choose a number from 1 to 5"));
// let numoftime = num;

// count = 1;
// // while (count <= num) {
//     //let less be = to the num - 1 
//     let less = num -1;
//     let numbers = 1;

//     while (less != 0 && less <= (num - 1) && numbers <= 12) {
//         let multiple = (less * numbers);
//        console.log(`${less} * ${numbers} = ${multiple}`);
      

//        let multiple2 = (num * numbers);
//        console.log(`${num} * ${numbers} = ${multiple2}`);
     
//      numbers++;
//     }
//     count++;
// }
// console.log(numoftime);


//A software used for collecting information and data from the user
// let firstName = prompt(`What is your first name?`);
// let lastName = prompt(`What is your last name?`);
// let birthyear = Number(prompt(`Which year were you born?`));
// let birthmonth = prompt(`Which month were you born`);
// let birthday = Number(prompt(`Which calender day were you born?`));


// <=============================Assignment=============================>

// Create a function that takes two numbers as arguments (num, length) and returns an array of
// multiples of num untill the length reaches .length

//E.g 
// arrayofmultiples (7, 5) === [7, 14, 21, 28, 35]

//arrayofmultiples (2, 4) === [2, 4, 8, 16]

//arrayofmultiples (3, 6) === [3, 9, 18, etc]


let num = 7;
let length = 5;
count = 1;
multipleofArray = [];


function multiple(num, length) {
    while (count <= length) {
        multipleofArray.push(num * count);

        count++

        
    }console.log(multipleofArray);

}

multiple(7, 5);
