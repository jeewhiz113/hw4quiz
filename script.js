var startButton = document.getElementById('startButton');
//var answers = document.getElementById('answers')
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answers");
var titleElement = document.getElementById("title");
var scoreElement = document.getElementById("displayScore");
var formElement = document.getElementById("form");
var submitElement = document.getElementById("submitBtn");
var initialElement = document.getElementById('initial');

var index = 0;
var scores = 0;
var timer = document.getElementById("timer");
var timeRemain =30*1000; // start with 60 seconds;
function displayTime(){
      
    var seconds = timeRemain/1000;  //mod out the minutes, we are left with seconds.
    if (timeRemain > 0){
        timeRemain -= 1000;
    }else {
        timeRemain = 0;
    }
    timer.innerHTML =  seconds;
}




var questionAndAnswers=[
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text:"1. strings", correct:false},
            {text:"2. booleans", correct:false},
            {text:"3. alerts", correct:true},
            {text:"4. numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        answers: [
            {text:"1. quotes", correct:false},
            {text:"2. curly brackets", correct:true},
            {text:"3. parenthesis", correct:false},
            {text:"4. square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: [
            {text:"1. numbers and strings", correct:false},
            {text:"2. other arrays", correct:false},
            {text:"3. booleans", correct:false},
            {text:"4. all of the above", correct:true}
        ]
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: [
            {text:"1. commas", correct:false},
            {text:"2. curly brackets", correct:false},
            {text:"3. quotes", correct:false},
            {text:"4. parenthesis", correct:true}
        ]
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "1. Javascript", correct:false},
            {text: "2. terminal/bash", correct:false},
            {text: "3. for loops", correct:false},
            {text: "4. console.log", correct: true}
        ]
    }
]
startButton.addEventListener('click', startGame);

function startGame(){
    setInterval(displayTime, 1000);
    console.log("game started");
    startButton.classList.add('hide');
    answerButtonElement.classList.remove('hide');
    titleElement.classList.add('hide');

    displayNextQuestion(index);
    index++;
}

function displayNextQuestion(i){
    deleteChildren(answerButtonElement);
    questionElement.innerText = questionAndAnswers[i].question;
    questionAndAnswers[i].answers.forEach(answer=>{
        var button = document.createElement('button');
        button.classList.add('button');
        button.innerText = answer.text;
        if(answer.correct){
            button.dataset.correct = answer.correct; //making a correct attriute and set it to be true;
        }else {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', pickAnswer);  //now computer is listening for a click, if it does, then call pickAnswer
        answerButtonElement.append(button);
    });

}
function deleteChildren(button){
    var child = button.lastElementChild;
    while(child){
      button.removeChild(child);
      child = button.lastElementChild;
    }
}

function pickAnswer(e){
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    console.log(selectedButton);
    if (correct == "true"){
        scores+=10;
    }else {
        timeRemain -= 10000;
        scores-=10;
    }
    if (index <5 && timeRemain > 0){
        displayNextQuestion(index);
    }else {
        console.log("Done with test")
        addScores();
    }
    index++;
}


function addScores(){
    titleElement.classList.remove('hide');
    questionElement.classList.add('hide');
    answers.classList.add('hide');
    titleElement.innerHTML="All Done! \n";
    scoreElement.innerHTML = "Your final score is " + scores +"\n";
    formElement.classList.remove('hide');
    //submitElement.addEventListener('click', appendScoreObject)
    submitElement.addEventListener('click', function(event){
        console.log("submit clicked")
        var newScore = {
            name: initialElement.value,
            score: scores,
        }
        if (localStorage.getItem("list") === null){
            var array = [];
            array.push(newScore);
            localStorage.setItem("list", JSON.stringify(array));
        }else {
            var array = JSON.parse(localStorage["list"]);
            array.push(newScore);
            localStorage.setItem("list", JSON.stringify(array));
        }
        console.log(localStorage.list);
    })
}

