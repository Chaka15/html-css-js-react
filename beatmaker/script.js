window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = ["red", "green", "black", "yellow", "blue", "brown"];

  pads.forEach((pad, i) => {
    pad.addEventListener("click", () => {
      sounds[i].currentTime = "0";
      sounds[i].play();
      createBubbles(i);
    });
  });
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
