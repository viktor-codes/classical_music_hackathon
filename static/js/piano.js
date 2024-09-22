const note = document.querySelector(".nowplaying");
const volume = document.querySelector(".volume-range input");
const keys = document.querySelectorAll(".key"),
  hints = document.querySelectorAll(".hints"),
  hintButton = document.querySelector(".hint-btn"),
  keysContainer = document.querySelector(".keys"),
  imageElement = document.querySelector(".music-wrapper img");
  
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
//   note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();

  const images = {
    "65": "../static/images/notes/c-1.png",
    "87": "{% static 'images/notes/c-1.png' %}", 
    "83": "images/notes/d-1.png",
    "69": "images/notes/d-sharp-1.png",
    "68": "images/notes/e-1.png",
    "70": "images/notes/f-1.png",
    "84": "images/notes/f-sharp-1.png",
    "71": "images/notes/g-1.png",
    "89": "images/notes/g-sharp-1.png",
    "72": "images/notes/a-1.png",
    "85": "images/notes/b-1.png",
    "74": "images/notes/b-flat-1.png",
    "75": "images/notes/c-2.png",
    "79": "images/notes/c-sharp-2.png",
    "76": "images/notes/d-2.png",
    "80": "images/notes/d-sharp-2.png",
    "186": "images/notes/e-2.png"
  };

  // Update the image source based on the key pressed
  if (images[keyCode]) {
      imageElement.src = images[keyCode];
      imageElement.style.display = 'block'; // Show the image
  } else {
      imageElement.style.display = 'none'; // Hide if no matching image
  }
}

// Volume control handler volume
const handleVolume = (e) => {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach(audio => {
    audio.volume = e.target.value; // Set the volume for each audio element
  });
};

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

volume.addEventListener("input", handleVolume);
hintButton.addEventListener("click", toggleHints);

hints.forEach((hint, index) => {
  hint.style.transitionDelay = `${index * 50}ms`;
});