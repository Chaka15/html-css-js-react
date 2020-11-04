class Questions {
  constructor(question, answers, correct, num) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    this.num = num;
  }
}
const question1 = new Questions(
  "Which city is the capital of Italy?",
  ["Milano", "Rome", "Naples"],
  1,
  1
);
const question2 = new Questions(
  "IT capital of Germany is...",
  ["Hamburg", "Berlin", "Munich"],
  0,
  2
);
const question3 = new Questions(
  "Who is the best goal scorer of PFL?",
  ["Mitrovic", "Ross", "Smith"],
  0,
  3
);
const question4 = new Questions(
  "The biggest country in the world is...",
  ["Russia", "China", "USA"],
  0,
  4
);
const question5 = new Questions(
  'What "Omnia mea mecum porto" means? ',
  [
    "Nice word opens all the doors",
    "You must lose in order to win",
    "All that is mine I carry with me",
  ],
  2,
  5
);
const question6 = new Questions(
  "The best defender of MNE squad?",
  ["Batak", "Zverotic", "Vukcevic"],
  1,
  6
);
//Array with all instances
const allQuestions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
];

//Dom strings object
const DOMstrings = {
  questionNumLabel: ".question-num",
  questionLabel: ".question",
  answerLabel: ".answers",
  buttonsLabel: "button",
  scoreNumLabel: ".num",
};

//Display question function
function displayQuestion(allQ) {
  window.n = Math.floor(Math.random() * allQuestions.length);
  //Question number
  document.querySelector(
    DOMstrings.questionNumLabel
  ).textContent = `Question ${allQ[n].num}`;
  //Question text
  document.querySelector(DOMstrings.questionLabel).textContent =
    allQ[n].question;
  //Answers text
  const ansNodeList = document.querySelectorAll(DOMstrings.answerLabel);
  const ansArr = Array.from(ansNodeList);
  ansArr.forEach((cur, i) => {
    cur.textContent = allQ[n].answers[i];
  });
}
displayQuestion(allQuestions);

//Calculate score
function score() {
  let sc = 0;
  return function (correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}
const keepScore = score();

const checkAnswer = (ans, callback) => {
  let sc, scoreNum, ansSound;
  scoreNum = document.querySelector(DOMstrings.scoreNumLabel);
  ansSound = new Audio("sounds/correct.mp3");
  if (ans === allQuestions[n].correct) {
    ansSound.play();
    sc = callback(true);
  } else {
    sc = callback(false);
  }
  scoreNum.textContent = sc;
};

//Buttons event listener
const buttonsNodeList = document.getElementsByTagName(DOMstrings.buttonsLabel);
const buttonsArr = Array.from(buttonsNodeList);
buttonsArr.forEach((btn) => {
  btn.addEventListener("click", () => {
    //Displaying score
    const splitClass = btn.className.split("-");
    const numClass = parseInt(splitClass[1]);
    //Checking answer and displaying score
    checkAnswer(parseInt(numClass), keepScore);
    //Displaying next question
    displayQuestion(allQuestions);
  });
});
