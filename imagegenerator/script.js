//Button
var button = document.querySelector(".generate-btn");

//function
function addImage() {
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://d1si3tbndbzwz9.cloudfront.net/soccer/team/44/logo.png"
  );
  document.querySelector(".flex-cont").appendChild(img);
}

//On click
button.addEventListener("click", addImage);

//On enter
document.addEventListener("keypress", function (event) {
  if (event.keycode === 13 || event.which === 13) {
    addImage();
  }
});
