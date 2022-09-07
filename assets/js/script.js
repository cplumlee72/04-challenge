var quizContainer = document.querySelector('.quizcontainer');
var startbutton = document.querySelector('.startbutton')
var timer = document.querySelectorAll('.timerbox');
var timertxt = document.querySelectorAll('.timeleft')
var answer_list = document.querySelector(".answer_list");
var op1 = document.querySelector("#op1")
var op2 = document.querySelector("#op2")
var op3 = document.querySelector("#op3")
var op4 = document.querySelector("#op4")
 queCount = 0


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

var que_text = document.querySelector("#question");
var ques = '<span>' +  questions[queCount].q + '</span>';
var opt1 = '<button class="option">'+ questions[queCount].ans[0] +'</button>';
var opt2 = '<button class="option">'+ questions[queCount].ans[1] +'</button>';
var opt3 = '<button class="option">'+ questions[queCount].ans[2] +'</button>';
var opt4 = '<button class="option">'+ questions[queCount].ans[3] +'</button>';

function showQuestions() {
        startbutton.remove();
        que_text.innerHTML = ques; //adding new span tag inside que_tag
        op1.innerHTML = opt1;
        op2.innerHTML = opt2;
        op3.innerHTML = opt3;
        op4.innerHTML = opt4;
        console.log(ques);
        console.log(queCount)
        return;
        
    }

function checkAnswer(event) {
    var userchoice = event.target.innerHTML; 
    if (queCount < questions.length) {
        if (userchoice == questions[queCount].correct) {                                      
            console.log(userchoice, "good job!");                                    
        } else {                        
            console.log("WRONG");
        } 
        queCount++;
        var que_text = document.querySelector("#question");
        var ques = '<span>' +  questions[queCount].q + '</span>';
        var opt1 = '<button class="option">'+ questions[queCount].ans[0] +'</button>';
        var opt2 = '<button class="option">'+ questions[queCount].ans[1] +'</button>';
        var opt3 = '<button class="option">'+ questions[queCount].ans[2] +'</button>';
        var opt4 = '<button class="option">'+ questions[queCount].ans[3] +'</button>';
        que_text.innerHTML = ques;
        op1.innerHTML = opt1;
        op2.innerHTML = opt2;
        op3.innerHTML = opt3;
        op4.innerHTML = opt4;
        console.log(questions.length);
        console.log(queCount);
        
    } else {
        console.log("OVER")
    }};


startbutton.addEventListener("click", showQuestions);
quizContainer.addEventListener("click", checkAnswer); 
