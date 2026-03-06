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

const finalCodeInput = document.querySelector("#finalCodeInput");
const submitCodeBtn = document.querySelector("#submitCodeBtn");
const accessDenied = document.querySelector("#accessDenied");
const accessGranted = document.querySelector("#accessGranted");

const FINAL_CODE = "systemisdown";

submitCodeBtn.addEventListener("click", function () {
  const enteredCode = finalCodeInput.value.trim().toLowerCase();

  accessDenied.classList.add("hidden");
  accessGranted.classList.add("hidden");

  if (enteredCode === FINAL_CODE) {
    accessGranted.classList.remove("hidden");

    setTimeout(function () {
      accessGranted.classList.add("hidden");
      showScreen("bg4");
    }, 3000);
  } else {
    accessDenied.classList.remove("hidden");

    setTimeout(function () {
      accessDenied.classList.add("hidden");
    }, 3000);
  }
});