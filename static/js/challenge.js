// const keys = document.querySelectorAll(".key");
const notes = Array.from(keys).map(key => key.getAttribute('data-note'));
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quitButton = document.getElementById('quit-btn');
const homeButton = document.getElementById('home-btn');
const playAgainButton = document.getElementById('play-again-btn');
const resetButton = document.getElementById('reset-btn');
const randomNoteElement = document.getElementById('random-note');
const resultsScreen = document.getElementById('results-screen');
const challengeProgress = document.getElementById('challenge-progress');
const scoreElement = document.getElementById('score');

let score = 0;
let currentNote = '';
let isStarted = false; // game state


// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    startButton.addEventListener('click', startChallenge);
    nextButton.addEventListener('click',handleNextButton);
    resetButton.addEventListener('click', restartChallenge);
    quitButton.addEventListener('click', quitChallenge);
});

window.addEventListener('keydown', selectAnswer);

keys.forEach(key => {
    key.addEventListener("click", selectAnswer);
    key.addEventListener("transitionend", removeTransition);
});
// Function to start new round
function startChallenge() {
    if (isStarted) {
        return;
    }

    // Initialise round and score to 0 at the start of quiz
    currentRound = 0;
    score = 0;
    setNextNote();
    isStarted = true;
}

// Function to generate random note
function getRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

function setNextNote() {
    resetState();
    currentNote = getRandomNote();
    showNote(currentNote);
    currentRound++;
}

function showNote(question) {
    randomNoteElement.innerText = currentNote;
}

function resetState() {
    // nextButton.classList.add('hide');
    randomNoteElement.innerText = '';
}

// Highlight the pressed key
function highlightKey(key, className) {
    key.classList.add(className);
    // key.classList.remove(className);
}

// Handle key press
function selectAnswer(e) {
    let keyCode;

    if (e.type === 'keydown') {
        keyCode = e.keyCode;
    } else if (e.type === 'click') {
        keyCode = e.currentTarget.getAttribute("data-key");
    }

    const selectedKey = document.querySelector(`.key[data-key="${keyCode}"]`);
    

    if (!selectedKey) return;

    const userAnswer = selectedKey.getAttribute('data-note');
    const correctKey = document.querySelector(`.key[data-note="${currentNote}"]`);

    if (userAnswer === currentNote) {
        highlightKey(selectedKey, 'correct');
        score++;
        updateScore();
    } else {
        highlightKey(selectedKey, 'incorrect');
        highlightKey(correctKey, 'correct');
        score--;
        updateScore();
    }
    // document.getElementById('score').innerText = 'Score: ' + score + '/' + maxRounds;
}

function handleNextButton() {
    clearKeyboard();
    // Increment round when next button is clicked
    currentRound++;
    setNextNote();
}

function checkScore() {
    if (score < 0) {
        alert('Your score has dropped below 0.\n Please Try again')
        restartChallenge();
    }
}

function updateScore() {
    checkScore();
    scoreElement.innerHTML = `SCORE: ${score}`
}

function clearKeyboard() {
    var correctTags = document.querySelectorAll(".correct");
    for(correctTag of correctTags) {
        correctTag.classList.toggle('correct');
    }
    var incorrectTags = document.querySelectorAll(".incorrect");
    for(incorrectTag of incorrectTags) {
        incorrectTag.classList.toggle('incorrect');
    }
    
}

function restartChallenge() {
    clearKeyboard()
    // resultsScreen.classList.add('hide');
    // Re-initialise round and score to 0 at the start of quiz
    currentRound = 0;
    score = 0;
    setNextNote();
}

function quitChallenge() {
    if (test = confirm("Are you sure you want to quit?")) {
        window.location.href = 'https://8000-itjosephk2-classicalmus-b1uprnu6u5h.ws.codeinstitute-ide.net';
    }
}
