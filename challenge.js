const keys = document.querySelectorAll('.key');
const notes = Array.from(keys).map(key => key.getAttribute('data-note'));
const maxRounds = 10;
let score = 0;
let currentRound = 0;
let currentNote = '';

// Function to generate random note
function getRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

// Function to start new round
function startNewRound() {
    if (currentRound >= maxRounds) {
        // !!!!! Need to decide where to display this !!!!!
        document.getElementById('#').innerText = 'Game Over! Final Score: ' + score + '/10';
        return;
    }

    currentNote = getRandomNote();
    // !!!!! Need to decide where to display this !!!!!
    document.getElementById('#').innerText = 'Press the correct key for the note: ' + currentNote;
    currentRound++;
}

// Highlight the pressed key
function highlightKey(key, className) {
    key.classList.add(className);
    setTimeout(() => {
        key.classList.remove(className);
    }, 500);
}

// Handle key press
function handleKeyPress(e) {
    const pressedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!pressedKey) return;  // If invalid key pressed

    const pressedNote = pressedKey.getAttribute('data-note');
    const correctKey = document.querySelector(`.key[data-note="${currentNote}"]`);

    if (pressedNote === currentNote) {
        // !!!!! Need to create CSS for this !!!!!
        highlightKey(pressedKey, 'correct');
        score++;
    } else {
        // !!!!! Need to create CSS for this !!!!!
        highlightKey(pressedKey, 'incorrect');
        highlightKey(correctKey, 'correct');
    }

    // !!!!! Need to decide where to display this !!!!!
    document.getElementById('score').innerText = 'Score: ' + score + '/' + maxRounds;
    startNewRound();
}

// Initialise game
startNewRound();

// Add event listener for key presses
window.addEventListener('keydown', handleKeyPress);