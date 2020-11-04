var flag, countryName;
flag = document.querySelector(".flag");
countryName = document.querySelector(".title");
//
function displayCountryName() {
  countryName.style.display = "initial";
  document.querySelector(".btn_random").style.display = "none";
}
//Init function
function init() {
  countryName.style.display = "none";
  flag.style.display = "none";
  document.querySelector(".btn_random").style.display = "initial";
}
init();

function displayFlag() {
  var n = Math.floor(Math.random() * 5) + 1;
  flag.src = "img/flag-" + n + ".png";
  flag.style.display = "initial";
  switch (n) {
    case 1:
      countryName.textContent = "Usa- You are up to American dream?";
      displayCountryName();
      break;
    case 2:
      countryName.textContent = "Italy- Fan of pasta,pizza and fashion?";
      displayCountryName();
      break;
    case 3:
      countryName.textContent = "Germany- Wealthy,secure,hard-working?";
      displayCountryName();
      break;
    case 4:
      countryName.textContent = "Spain- Sexy,sleepy and outgoing?";
      displayCountryName();
      break;
    case 5:
      countryName.textContent = "Norway- Winter,fish and money lover?";
      displayCountryName();
      break;
  }
}

//Button random
document.querySelector(".btn_random").addEventListener("click", displayFlag);

//Return key
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    displayFlag();
  }
});

//Button for new game
document.querySelector(".btn-restart").addEventListener("click", init);
