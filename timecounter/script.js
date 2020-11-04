const deadline = "09/17/2020 14:43:00";

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
function updateClock() {
  const t = getTimeRemaining(deadline);

  if (t.total <= 0) {
    clearInterval(timeInterval);
    clock.classList.add("buzz");
    clock.textContent = "Your session has started!";
    const h1 = document.getElementById("title");
    h1.remove();
  } else {
    clock.textContent = `${("0" + t.days).slice(-2)}:${("0" + t.hours).slice(
      -2
    )}:${("0" + t.minutes).slice(-2)}:${("0" + t.seconds).slice(-2)}`;
  }
}

function initializeClock(id, endTime) {
  const clock = document.getElementById(id);
  updateClock();
}

const timeInterval = setInterval(updateClock, 1000);
initializeClock("clock", deadline);
