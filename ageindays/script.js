function ageInDays() {
  var birthYear = prompt("When were you born?");
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDayss + " old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}