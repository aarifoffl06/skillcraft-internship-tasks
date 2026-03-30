const quizData = [

{
question: "Which language is used for web development?",
a: "Python",
b: "HTML",
c: "C++",
d: "Java",
correct: "b"
},

{
question: "Which company developed JavaScript?",
a: "Microsoft",
b: "Netscape",
c: "Google",
d: "Apple",
correct: "b"
},

{
question: "Which HTML tag is used for headings?",
a: "<head>",
b: "<h1>",
c: "<p>",
d: "<title>",
correct: "b"
},

{
question: "Which CSS property changes text color?",
a: "background",
b: "font-size",
c: "color",
d: "align",
correct: "c"
},

{
question: "Which symbol is used for comments in JavaScript?",
a: "//",
b: "#",
c: "--",
d: "**",
correct: "a"
}

];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;

a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}

function deselectAnswers(){

answerEls.forEach(answer => answer.checked = false);

}

function getSelected(){

let answer;

answerEls.forEach(answerEl => {

if(answerEl.checked){

answer = answerEl.id;

}

});

return answer;

}

submitBtn.addEventListener("click", () => {

const answer = getSelected();

if(answer){

if(answer === quizData[currentQuiz].correct){

score++;

}

currentQuiz++;

if(currentQuiz < quizData.length){

loadQuiz();

}
else{

document.getElementById("quiz").innerHTML =

`<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="location.reload()">Restart Quiz</button>`;

}

}

});