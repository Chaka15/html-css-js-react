//Function constructor
//Sve u IIFE
(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  //Instances kreirane po Person "blueprintom"
  var pedja = new Question(
    "Gde ce da zivi Pedja?",
    ["Nemacka", "USA", "Barselona"],
    1
  );
  var lazar = new Question(
    "Sta upisuje Lazar?",
    ["Elektro", "PMF", "Ide na stranu"],
    0
  );
  var vidovdan = new Question(
    "Kojeg je datuma Vidovdan?",
    ["29. jun", "24. jun", "28. jun"],
    2
  );
  //Arry sa svim pitanjima
  var questions = [pedja, lazar, vidovdan];
  //Nasumicni odabir pitanja
  var n = Math.floor(Math.random() * questions.length);
  //Funkcija displayQuestion kao prototype(zasto kao prototip a ne kao funkcija?) i zvanje funkcije
  //Funkcija koja sabira i prati score korisnika
  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  //Mala nejasnoca zasto ovo mora u varijablu da se store
  var keepScore = score();
  //Funkcija koja display score u konzolu
  //Zasto je ona sad prototype a ne funkcija kako se to olducuje sto je sto?
  Question.prototype.displayScore = function (score) {
    //Zasto ne sc umesto score
    console.log("Your current score is " + score + " !");
    console.log("----------------");
  };
  //Zasto je ovde ne zovnem?
  // displayScore(sc);
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + " : " + this.answers[i]);
    }
  };
  questions[n].displayQuestion();
  //Funkcija za proveru odgovora i njeno zvanje
  var answer = parseInt(prompt("What is the correct answer?"));
  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      //Cudno dole
      sc = callback(true);
    } else {
      console.log("Wrong answer!");
      //Cudno dole
      sc = callback(false);
    }
    //Zasto mora ovde this
    this.displayScore(sc);
  };
  //zasto ovde bez this.answer? i zasto ovde ne moze parseInt
  questions[n].checkAnswer(answer, keepScore);
  //Funkcija koja omogucava da se ne zavrsi kviz nego da ide sledece pitanje
  //Zast ovo sad nije u prototype constructora Question nego samo funkcija?
  function nextQuestion() {
    //Treba li mi sve ovo unutar i napolje jer on nesto brise
    //Maknut je parseInt,zasto?
    //Cini mi se da je ovde red ovoga dole bio bitan nije mi stampalo pitanje
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt("What is the correct answer?");
    if (answer !== "exit") {
      //Zasto ovde parseInt
      questions[n].checkAnswer(parseInt(answer), keepScore);
      //Kakvo je ovo zvanje unutar funkcije same?
      nextQuestion();
    }
  }
  nextQuestion();
  //Redosled je bio bitan kad je bilo dole display question i funkcija score javljalo je
  //callback is not a function
})();
