const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints"),
  hintButton = document.querySelector(".hint-btn"),
  keysContainer = document.querySelector(".keys")
  
// Function to play notes based on key press or click
function playNoteFromKey(e) {
  let keyCode;

  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else if (e.type === 'click') {
    keyCode = e.currentTarget.getAttribute("data-key");
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  const keyNote = key.getAttribute("data-note");
  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();

}

// Remove playing class after transition ends
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// Add a click event to each key element
keys.forEach(key => {
  key.addEventListener("click", playNoteFromKey);
  key.addEventListener("transitionend", removeTransition);
});

// Play note on key down
window.addEventListener("keydown", playNoteFromKey);

// Toggle hints visibility and button on and off text
function toggleHints() {
  keysContainer.classList.toggle("hints-active");

  const textElement = hintButton.querySelector('.text');

  if (keysContainer.classList.contains("hints-active")) {
    hintButton.classList.add("active");
    textElement.textContent = "ON";
    hintButton.classList.add("on");
  } else {
    hintButton.classList.remove("active");
    textElement.textContent = "OFF";
    hintButton.classList.remove("on");
  }
}

hintButton.addEventListener("click", toggleHints);

hints.forEach((hint, index) => {
  hint.style.transitionDelay = `${index * 50}ms`;
});