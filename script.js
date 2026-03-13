const bgMusic = document.querySelector("#bgMusic");
bgMusic.volume = 0.3;

const deniedSound = document.querySelector("#deniedSound");
const grantedSound = document.querySelector("#grantedSound");
const finalMusic = document.querySelector("#finalMusic");

deniedSound.volume = 0.8;
grantedSound.volume = 0.8;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });

  document.querySelector("#" + id).classList.remove("hidden");
}

// Start -> Background 1
document.querySelector("#startBtn").addEventListener("click", function () {
  bgMusic.play();
  showScreen("bg1");
});

// Next -> Background 2
document.querySelector("#nextBtn").addEventListener("click", function () {
  showScreen("bg2");
});

// Hint button behavior
const hintBtn = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");
const finalCodeInput = document.querySelector("#finalCodeInput");
const submitCodeBtn = document.querySelector("#submitCodeBtn");

hintBtn.addEventListener("click", function () {

  // show hint text
  hintText.classList.remove("hidden");

  // show code entry
  finalCodeInput.classList.remove("hidden");
  submitCodeBtn.classList.remove("hidden");

  // hide the hint button
  hintBtn.style.display = "none";

});

const accessDenied = document.querySelector("#accessDenied");
const accessGranted = document.querySelector("#accessGranted");

const FINAL_CODE = "systemisdown!";

submitCodeBtn.addEventListener("click", function () {

  const enteredCode = finalCodeInput.value.trim().toLowerCase();

  accessDenied.classList.add("hidden");
  accessGranted.classList.add("hidden");

  deniedSound.pause();
  deniedSound.currentTime = 0;
  grantedSound.pause();
  grantedSound.currentTime = 0;

  if (enteredCode === FINAL_CODE) {

    accessGranted.classList.remove("hidden");
    grantedSound.play();

    setTimeout(function () {

      accessGranted.classList.add("hidden");

      showScreen("bg4");

      bgMusic.pause();
      bgMusic.currentTime = 0;

      finalMusic.currentTime = 0;
      finalMusic.play().catch(function(error){
        console.log("Final music blocked:", error);
      });

    }, 3000);

  } else {

    accessDenied.classList.remove("hidden");
    deniedSound.play();

    setTimeout(function () {
      accessDenied.classList.add("hidden");
    }, 3000);

  }

});