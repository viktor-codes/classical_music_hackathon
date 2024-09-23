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
  note.textContent = keyNote;
  audio.currentTime = 0;
  audio.play();

  const images = {
    "65": "https://imgur.com/OeVsj5G.png",
    "87": "https://imgur.com/TWrAhsw.png", 
    "83": "https://imgur.com/OsLHgsp.png",
    "69": "https://imgur.com/pYTosiU.png",
    "68": "https://imgur.com/A3Paaqf.png",
    "70": "https://imgur.com/VU6uABa.png",
    "84": "https://imgur.com/G0DR2np.png",
    "71": "https://imgur.com/Oq4Oke8.png",
    "89": "https://imgur.com/NWa1MZ1.png",
    "72": "https://imgur.com/DANxLoH.png",
    "85": "https://imgur.com/mtw9SBa.png",
    "74": "https://imgur.com/VDQuvTo.png",
    "75": "https://imgur.com/0nLDFXT.png",
    "79": "https://imgur.com/nHdARtx.png",
    "76": "https://imgur.com/Bvo56ti.png",
    "80": "https://imgur.com/QpZ23jn.png",
    "186": "https://imgur.com/Uy22mMI.png"
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