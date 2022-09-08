var quizContainer = document.querySelector('.quizcontainer');
var startbutton = document.querySelector('.startbutton')
var timer = document.querySelector('.timerbox');
var timertxt = document.querySelector('.timeleft')
var hiScores = document.querySelector(".hiscores");
var que_text = document.querySelector("#question");
var op1 = document.querySelector("#op1")
var op2 = document.querySelector("#op2")
var op3 = document.querySelector("#op3")
var op4 = document.querySelector("#op4")

var header = document.querySelector('header');
console.log(header)
timerCount = 50
gameState = false
queCount = 0
quesRight = 0

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


function showScores() {
    header.remove();
    document.querySelector('main').remove();
    var hsBox = document.createElement("div");
    var hsHeader = document.createElement("header");
    var hsSpan = document.createElement("h1");
    hsBox.setAttribute("id", "hsBox");
    hsHeader.innerHTML = "Current High Score";
    hsHeader.setAttribute('id', 'hsHeader');    
    hsSpan.textContent = localStorage.getItem('newHs') + ": " + localStorage.getItem('newScore');

    document.querySelector('body').appendChild(hsHeader);
    document.querySelector('body').appendChild(hsBox);
    hsBox.appendChild(hsSpan);


   }



function endGame() {   
    quizContainer.remove();
    que_text.innerHTML = "Log your score here!";

    var newContainer = document.createElement("div");
    document.querySelector("main").appendChild(newContainer);

    var hsMessage = document.createElement("p");
    hsMessage.innerHTML = "Your final score is" + ' ' + quesRight;
    var inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    var submitButton = document.createElement("button")
    submitButton.textContent = ('submit')
    

    newContainer.appendChild(hsMessage);
    newContainer.appendChild(inputBox);
    newContainer.appendChild(submitButton);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        var newEntry = inputBox.value;
        var studentScore = timerCount;
        if (newEntry === "") {
            alert("Can't submit an empty form!");
        } else {
            alert("Your highscore has been logged!")}
        console.log(newEntry);
        localStorage.setItem('newHs', newEntry)
        localStorage.setItem('newScore', studentScore)
        inputBox.value = ""
        })
    return;
    }



function showQuestions() {
    gameState = true
    var ques =  questions[queCount].q;
    var opt1 = '<button class="option">'+ questions[queCount].ans[0] +'</button>';
    var opt2 = '<button class="option">'+ questions[queCount].ans[1] +'</button>';
    var opt3 = '<button class="option">'+ questions[queCount].ans[2] +'</button>';
    var opt4 = '<button class="option">'+ questions[queCount].ans[3] +'</button>';
    startbutton.remove();
    que_text.innerHTML = ques; //adding new span tag inside que_tag
    op1.innerHTML = opt1;
    op2.innerHTML = opt2;
    op3.innerHTML = opt3;
    op4.innerHTML = opt4;
    quizContainer.addEventListener("click", checkAnswer);
    return;     
    }

function checkAnswer(event) {
    var lastQues =  questions[2].q;        
    var ques =  questions[queCount].q;        
    var userchoice = event.target.innerHTML; 
    if ( lastQues !== ques) {
        if (userchoice == questions[queCount].correct) {
            quesRight++; 
            queCount++;                                     
            console.log(userchoice, "good job!"); 
            console.log(queCount, questions.length);
            showQuestions();                                   
        } else {                        
            console.log("WRONG");
          }
    } else {
        gameState = false
        endGame();
        console.log("OVER")
        return;
       } return;
    };


   


hiScores.addEventListener("click", showScores);
startbutton.addEventListener("click", showQuestions);
 
