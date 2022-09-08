var quizContainer = document.querySelector('.quizcontainer');
var startbutton = document.querySelector('.startbutton')
var header = document.querySelector('header');
var timer = document.querySelector('.timerbox');
var timertxt = document.querySelector('.timeleft')
var hiScores = document.querySelector(".hiscores");
var que_text = document.querySelector("#question");
var op1 = document.querySelector("#op1")
var op2 = document.querySelector("#op2")
var op3 = document.querySelector("#op3")
var op4 = document.querySelector("#op4")



secondsLeft = 50
gameState = false
queCount = 0
quesRight = 0

// Setting each questions with it's options and correct option
var questions = [
    {
        number: 1,
        q: "What Does CSS Stand for?",
        ans: [
            'Computer Styling Sheet',
            'Cascading Style Sheet',
            'Comprised of Style Sheets',
            'Compiling Style Sheets'
        ],
        correct: 'Cascading Style Sheet',
    },
    {
        number: 2,
        q: "Which method calls a function for each element in an array?",
        ans: [
            'while()',
            'loop()',
            'forEach()',
            'None of the Above'
        ],
        correct: 'forEach()',
    },
    {
        number: 3,
        q: "Which of the following functions of Array object returns a new array comprised of this array joined with other arrays(s) and/or values?",
        ans: [
            'concat()',
            'pop()',
            'push()',
            'some()'
        ],
        correct: 'concat()',
    },
];


function showScores() {
    function refreshPage() {
        window.location.reload()
    }
    header.remove();
    document.querySelector('main').remove();
    var hsBox = document.createElement("div");
    var hsHeader = document.createElement("header");
    var hsSpan = document.createElement("h1");
    var backButton = document.createElement("button");
    backButton.textContent = "go back";
    backButton.setAttribute("id", "backbutton")
    hsBox.setAttribute("id", "hsBox");
    hsHeader.innerHTML = "Current High Score";
    hsHeader.setAttribute('id', 'hsHeader');    
    hsSpan.textContent = localStorage.getItem('newHs') + ": " + localStorage.getItem('newScore');

    document.querySelector('body').appendChild(hsHeader);
    document.querySelector('body').appendChild(hsBox);
    hsBox.appendChild(hsSpan);
    hsBox.appendChild(backButton);
    backButton.addEventListener("click", refreshPage)
    
   }



function endGame() {   
    quizContainer.remove();
    que_text.innerHTML = "Log your score here!";

    var newContainer = document.createElement("div");
    document.querySelector("main").appendChild(newContainer);

    var hsMessage = document.createElement("p");
    hsMessage.innerHTML = "Your final score is" + ' ' + secondsLeft + '/50';
    var inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Enter your intitals here");
    var submitButton = document.createElement("button")
    submitButton.textContent = ('submit')
    

    newContainer.appendChild(hsMessage);
    newContainer.appendChild(inputBox);
    newContainer.appendChild(submitButton);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        var newEntry = inputBox.value;
        var studentScore = secondsLeft;
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
    var footer = document.createElement("div")
    footer.setAttribute("id", "quizfooter")

function showQuestions() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timertxt.textContent = secondsLeft;    
        if(secondsLeft === 0 || gameState === false) {
          clearInterval(timerInterval);
        }    
      }, 1000);

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
    if ( lastQues !== ques && secondsLeft > 0) {
        if (userchoice == questions[queCount].correct) {
            quesRight++; 
            queCount++;                                     
            console.log(userchoice, "good job!"); 
            console.log(queCount, questions.length);
            showQuestions();                                   
        } else { 
            secondsLeft = secondsLeft - 5; 
                                 
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
 
