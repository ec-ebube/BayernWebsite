//==============Quiz website =====================>

const quiz = [
    {
        'Question': 'How many countries are in Africa?',
        'optionA': 20,
        'optionB': 40,
        'optionC': 56,
        'Answer': 56,
    },
    {
        'Question': 'How many continents are in the world?',
        'optionA': 3,
        'optionB': 7,
        'optionC': 20,
        'Answer': 7,
    },
    {
        'Question': 'In which year did Bjarne stroustrup began work on C++?',
        'optionA': 1979,
        'optionB': 1950,
        'optionC': 1985,
        'Answer': 1979,
    },
    {
        'Question': 'How many zeros make a quantillion?',
        'optionA': 9,
        'optionB': 12,
        'optionC': 15,
        'Answer': 15,
    },
    {
        'Question': 'For how many billion (in USD) was twitter sold?',
        'optionA': 30,
        'optionB': 44,
        'optionC': 70,
        'Answer': 44,
    },
    {
        'Question': 'When was HTML created?',
        'optionA': 1991,
        'optionB': 2000,
        'optionC': 1987,
        'Answer': 1991,
    },
    {
        'Question': 'How many states has America?',
        'optionA': 36,
        'optionB': 50,
        'optionC': 29,
        'Answer': 50,
    },
    {
        'Question': 'How many percent of the Earth is cover with water?',
        'optionA': 50,
        'optionB': 30,
        'optionC': 70,
        'Answer': 70,
    },
    {
        'Question': 'How many states are in Nigeria?',
        'optionA': 36,
        'optionB': 40,
        'optionC': 52,
        'Answer': 36,
    },
    {
        'Question': 'How many geo-political zones are in Nigeria?',
        'optionA': 36,
        'optionB': 10,
        'optionC': 6,
        'Answer': 6,
    }
]

const ul = document.querySelector('ul');

function showQuestions() {

    for (let i = 0; i < quiz.length; //i++
    ) {
        //create h3
        const question1 = document.createElement('h3');
        question1.innerText = quiz[i].Question;

        //create input
        const inputA = document.createElement('input');
        inputA.type = 'radio';
        inputA.value = quiz[i].optionA;
        inputA.name = "Question2" + i;

        const inputB = document.createElement('input');
        inputB.type = 'radio';
        inputB.value = quiz[i].optionB;
        inputB.name = "Question2" + i;

        const inputC = document.createElement('input');
        inputC.type = 'radio';
        inputC.value = quiz[i].optionC;
        inputC.name = "Question2" + i;

        //create label
        const label = document.createElement('label');
        label.append(`A:`, inputA, `${quiz[i].optionA} \n `)

        const label2 = document.createElement('label2');
        label2.append(`B:`, inputB, `${quiz[i].optionB} \n`)

        const label3 = document.createElement('label3');
        label3.append(`C:`, inputC, `${quiz[i].optionC} \n`)

        const Ans = document.createElement('Ans');
        Ans.innerHTML = `Answer: ${quiz[i].Answer} `



        //attach to ul
        const ul = document.querySelector('ul');
        ul.append(question1);
        // ul.append(inputA)
        ul.append(label);
        // ul.append(inputB)
        ul.append(label2);
        // ul.append(inputC)
        ul.append(label3);
        // ul.append(Ans);

    }

}




function displayQuestions() {

    ul.style.display = "block";
    showQuestions();

}


