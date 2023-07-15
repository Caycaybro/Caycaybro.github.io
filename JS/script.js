let stars = document.getElementById("stars");
let meteorid = document.getElementById("meteorid");
let rocket = document.getElementById("rocket");
let text = document.getElementById("text");
let button = document.getElementById("button");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.3 + "px";
  rocket.style.top = value * 0.5 + "px";
  text.style.marginBottom = value * 1 + "px";
  button.style.marginBottom = value * 1 + "px";
});

window.addEventListener("scroll", fadeInElement);

function fadeInElement() {
  var elementsLeft = document.getElementsByClassName("fade-in-left");
  var elementsRight = document.getElementsByClassName("fade-in-right");

  fadeInFromDirection(elementsLeft, "left");
  fadeInFromDirection(elementsRight, "right");
}

function fadeInFromDirection(elements, direction) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= -100) {
      element.style.opacity = "1"; // style opacity dalam css (.fade-in-left dan right) diubah dari 0 menjadi 1
      element.style.transform = "none"; // style transform dalam css (.fade-in-left dan right) diubah dari ... menjadi none

      // if (direction === "left") {
      //   element.style.transform = "translateX(0)";
      // } else if (direction === "right") {
      //   element.style.transform = "translateX(0)";
      // }
    }
  }
}
