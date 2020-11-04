const elements = {
  title: document.querySelector("h2"),
  ul: document.querySelector("ul"),
  input: document.querySelector(".input-txt"),
  inputBtn: document.querySelector(".check"),
  form: document.querySelector(".form"),
  footer: document.querySelector("footer"),
};

const focusInput = () => {
  elements.input.focus();
};

const init = () => {
  let days, d, currDay;
  //Getting current date
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  d = new Date();
  currDay = d.getDay() - 1;
  elements.title.textContent = `Enjoy your ${days[currDay]}`;
  //Clearing list
  elements.ul.innerHTML = "";
  //Putting focus on input
  focusInput();
};

//Calling init function
init();
//State arrays contained in an object for easier tracking of tasks and list
const stateArr = {
  listArr: [],
  completedTasks: [],
};
//Funcion for adding item to the list
const addToList = (input) => {
  const markup = `<button class="btn">${input.value}<i class="fa fa-times"></i></button>`;
  if (
    input.value !== "" &&
    input.value !== " " &&
    stateArr.listArr.length < 14
  ) {
    elements.ul.insertAdjacentHTML("beforeend", markup);
    stateArr.listArr.push(markup);
  } else if (stateArr.listArr.length === 14) {
    alert("Too many obligations for today mate!");
  }
};

//Clearing input text function
const clearInput = () => {
  elements.input.value = "";
  focusInput();
};

//Main function that is called on click and keypress
const addFun = () => {
  //Adding item to the list
  addToList(elements.input);
  //Clearing input field
  clearInput();
};

//Counting completed tasks
const countTasks = () => {
  elements.footer.textContent = `${stateArr.completedTasks.length} out of ${stateArr.listArr.length} tasks completed`;
  if (
    stateArr.completedTasks.length === stateArr.listArr.length &&
    stateArr.completedTasks.length !== 0
  ) {
    elements.footer.textContent = "Well done,you are being productive today!";
  }
};

//LISTENERS
//Input button event listener
elements.inputBtn.addEventListener("click", (e) => {
  addFun();
  countTasks();
});

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 13 || e.which === 13) {
    addFun();
    countTasks();
  }
});

//Delete buttons event listener
elements.ul.addEventListener("click", (e) => {
  let el;
  if (e.target.matches(".fa-times")) {
    el = e.target;
    el.parentNode.parentNode.removeChild(el.parentNode);
    stateArr.listArr.pop(el);
    countTasks();
    if (el.parentNode.classList.contains("list-btn")) {
      stateArr.completedTasks.pop(el);
      countTasks();
    }
  } else if (e.target.matches("button")) {
    el = e.target;
    el.classList.toggle("list-btn");
    if (el.classList.contains("list-btn")) {
      stateArr.completedTasks.push(el);
    } else {
      stateArr.completedTasks.pop(el);
    }
    countTasks();
  }
});
