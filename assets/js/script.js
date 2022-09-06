var quizContainer = document.querySelectorAll('.quizcontainer');
var timer = document.querySelectorAll('.timerbox');
var timertxt = document.querySelectorAll('.timeleft')
var answer_list = document.querySelector(".answer_list");
var op1 = document.querySelector("#op1")
var op2 = document.querySelector("#op2")
var op3 = document.querySelector("#op3")
var op4 = document.querySelector("#op4")
var queCount = 0

// Setting each questions with it's options and correct option
var questions = [
    {
        number: 1,
        q: "This is question 1",
        ans: [
            'a',
            'b',
            'c',
            'd'
        ],
        correct: 'b',
    },
    {
        number: 2,
        q: "This is question 2",
        ans: [
            'a',
            'b',
            'c',
            'd'
        ],
        correct: 'c',
    },
    {
        number: 3,
        q: "This is question 3",
        ans: [
            'a',
            'b',
            'c',
            'd'
        ],
        correct: 'a',
    },
];




    function showQuestions(index) {
        let que_text = document.querySelector("#question")
        // code here
        let ques = "<span>" +  questions[index].q + '</span>';
        let opt1 = '<button class="option">'+ questions[index].ans[0] +'</button>'
        let opt2 = '<button class="option">'+ questions[index].ans[1] +'</button>'
        let opt3 = '<button class="option">'+ questions[index].ans[2] +'</button>'
        let opt4 = '<button class="option">'+ questions[index].ans[3] +'</button>';
        que_text.innerHTML = ques; //adding new span tag inside que_tag
        op1.innerHTML = opt1;
        op2.innerHTML = opt2;
        op3.innerHTML = opt3;
        op4.innerHTML = opt4;

    }   

    function showResults(questions, quizcontent, resultsContainer) {
        // code here
    }



showQuestions(queCount);