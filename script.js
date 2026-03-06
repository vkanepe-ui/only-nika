function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });

  document.querySelector("#" + id).classList.remove("hidden");
}

// Start -> Background 1
document.querySelector("#startBtn").addEventListener("click", function () {
  showScreen("bg1");
});

// Next -> Background 2
document.querySelector("#nextBtn").addEventListener("click", function () {
  showScreen("bg2");
});

// Hint button behavior
const hintBtn = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");

let hintShown = false;

hintBtn.addEventListener("click", function () {
  if (!hintShown) {
    hintText.classList.remove("hidden");
    hintShown = true;
  } else {
    showScreen("bg3");
  }
});