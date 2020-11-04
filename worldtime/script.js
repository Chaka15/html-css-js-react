const cityBase = {
  ldn: document.querySelector(".ldn"),
  bg: document.querySelector(".bg"),
  tky: document.querySelector(".tky"),
  la: document.querySelector(".la"),
  hou: document.querySelector(".hou"),
  ny: document.querySelector(".ny"),
  time: document.querySelector(".time"),
  clock: document.querySelector(".clock"),
  main: document.querySelector(".main"),
  london: document.querySelector(".london"),
  belgrade: document.querySelector(".belgrade"),
  tokyo: document.querySelector(".tokyo"),
  losangeles: document.querySelector(".losangeles"),
  houston: document.querySelector(".houston"),
  newyork: document.querySelector(".newyork"),
};

function calcTime(offset) {
  // create Date object for current location
  var d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  var nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return nd.toLocaleString();
}

setInterval(() => {
  cityBase.ldn.textContent = calcTime("+1");
}, 1000);
setInterval(() => {
  cityBase.bg.textContent = calcTime("+2");
}, 1000);
setInterval(() => {
  cityBase.tky.textContent = calcTime("+9");
}, 1000);
setInterval(() => {
  cityBase.la.textContent = calcTime("-7");
}, 1000);
setInterval(() => {
  cityBase.hou.textContent = calcTime("-5");
}, 1000);
setInterval(() => {
  cityBase.ny.textContent = calcTime("-4");
}, 1000);

//Add hover on name of the cities
function addHoverEffect(element, animation) {
  const nodeL = document.querySelectorAll(element);
  nodeL.forEach((el) => {
    el.classList.add(animation);
  });
}
addHoverEffect(".name", "hvr-float-shadow");

//Add other cities with the same time zone on click of the city
function clickCity() {
  const nodeCities = document.querySelectorAll(".name");

  nodeCities.forEach((el) => {
    el.addEventListener("click", (e) => {
      //London
      if (e.target.matches(".london")) {
        cityBase.ldn.classList.toggle("hidden");
        cityBase.london.textContent = "London";
        if (cityBase.ldn.classList.contains("hidden")) {
          cityBase.london.textContent = "London Barcelona Paris";
        }
      }
      //Belgrade
      if (e.target.matches(".belgrade")) {
        cityBase.bg.classList.toggle("hidden");
        cityBase.belgrade.textContent = "Belgrade";
        if (cityBase.bg.classList.contains("hidden")) {
          cityBase.belgrade.textContent = "Belgrade Podgorica Sarajevo";
        }
      }
      //Tokyo
      if (e.target.matches(".tokyo")) {
        cityBase.tky.classList.toggle("hidden");
        cityBase.tokyo.textContent = "Tokyo";
        if (cityBase.tky.classList.contains("hidden")) {
          cityBase.tokyo.textContent = "Tokyo Melbourne Kyoto";
        }
      }
      //Los Angeles
      if (e.target.matches(".losangeles")) {
        cityBase.la.classList.toggle("hidden");
        cityBase.losangeles.textContent = "Los Angeles";
        if (cityBase.la.classList.contains("hidden")) {
          cityBase.losangeles.textContent = "Los Angeles Portland Vancouver";
        }
      }
      //Houston
      if (e.target.matches(".houston")) {
        cityBase.hou.classList.toggle("hidden");
        cityBase.houston.textContent = "Houston";
        if (cityBase.hou.classList.contains("hidden")) {
          cityBase.houston.textContent = "Houston Dallas Minneapolis";
        }
      }
      //New York
      if (e.target.matches(".newyork")) {
        cityBase.ny.classList.toggle("hidden");
        cityBase.newyork.textContent = "New York";
        if (cityBase.ny.classList.contains("hidden")) {
          cityBase.newyork.textContent = "New York Boston Washington";
        }
      }
    });
  });
}
clickCity();

//
//GSAP ANIMATIONS
const timeline = gsap.timeline({ defaults: { duration: 1.5 } });
timeline
  .from(".title", { y: "-100%", ease: "bounce" })
  .from(".time", { duration: 2, x: "-100vw", ease: "expo" }, 1)
  .from(".name", { opacity: 0, stagger: 0.4 }, "<1");
