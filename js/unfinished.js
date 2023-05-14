
// let merged = [];



// let joinedArray = merged.sort(
//     function merged(params) {

//     }
// )
// mergeArrays([1,2,3],[4,5,6],[7,8,9]);
// console.log(merged);

// ================Assignment===================

// Create a function that takes two numbers as arguments (num, length) and returns an array of
// multiples of num untill the length reaches .length

//E.g 
// arrayofmultiples (7, 5) === [7, 14, 21, 28, 35]

//arrayofmultiples (2, 4) === [2, 4, 8, 16]

//arrayofmultiples (3, 6) === [3, 9, 18, etc]

let bayernMunichPlayers = [
    {
        'firstName': 'Manuel',
        'lastName': 'Neuer',
        'Nationality': 'Germany',
        'Position': 'Goal Keeper',
        'Jersey': 1
    },
    {
        'firstName': 'Thomas',
        'lastName': 'Muller',
        'Nationality': 'Germany',
        'Position': 'Striker',
        'Jersey': 25
    },
    {
        'firstName': 'Jamal',
        'lastName': 'Musiala',
        'Nationality': 'Germany',
        'Position': 'Attacking Midfielder',
        'Jersey': 42
    },
    {
        'firstName': 'Sadio',
        'lastName': 'Mane',
        'Nationality': 'Senegal',
        'Position': 'Striker',
        'Jersey': 17
    },
    {
        'firstName': 'Serge',
        'lastName': 'Gnabry',
        'Nationality': 'Germany',
        'Position': 'Striker',
        'Jersey': 7
    },
    {
        'firstName': 'Alphonso',
        'lastName': 'davis',
        'Nationality': 'Canada',
        'Position': 'Defender',
        'Jersey': 19
    },
    {
        'firstName': 'Leroy',
        'lastName': 'Sane',
        'Nationality': 'Germany',
        'Position': 'Striker',
        'Jersey': 10
    },
    {
        'firstName': 'Joshua',
        'lastName': 'Kimmich',
        'Nationality': 'Germany',
        'Position': 'Mid Fielder',
        'Jersey': 6
    },
    {
        'firstName': 'Lucas',
        'lastName': 'Hernandez',
        'Nationality': 'Espanol',
        'Position': 'Defender',
        'Jersey': 21
    },
    {
        'firstName': 'Kingsley',
        'lastName': 'Comman',
        'Nationality': 'Unknown',
        'Position': 'Striker',
        'Jersey': 11
    }
]

const table = document.querySelector('table');
bayernMunichPlayers.forEach(e => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    td1.innerText = e.firstName;
    td2.innerText = e.lastName;
    td3.innerText = e.Nationality;
    td4.innerText = e.Position;
    td5.innerText = e.Jersey;



    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    table.appendChild(tr);


});

