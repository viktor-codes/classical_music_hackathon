// const keys = document.querySelectorAll('.key');
const notes = Array.from(keys).map(key => key.getAttribute('data-note'));

// const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quitButton = document.getElementById('quit-btn');
const homeButton = document.getElementById('home-btn');
const playAgainButton = document.getElementById('play-again-btn');
// const quizScreen = document.getElementById('quiz-screen');
const randomNoteElement = document.getElementById('random-note');
const resultsScreen = document.getElementById('results-screen');
const challengeProgress = document.getElementById('challenge-progress');
const totalScoreElement = document.getElementById('total-score');

const maxRounds = 10;
let score = 0;
let currentRound = 0;
let currentNote = '';
let isStarted = false; // game state


// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    startButton.addEventListener('click', startChallenge);

    nextButton.addEventListener('click', () => {
        if (currentRound >= maxRounds) {
            handleNextButton();
        }
    });

    // playAgainButton.addEventListener('click', restartChallenge);

    quitButton.addEventListener('click', quitChallenge);

    // homeButton.addEventListener('click', goHome);

    
});

window.addEventListener('keydown', selectAnswer);

keys.forEach(key => {
    key.addEventListener("click", selectAnswer);
    key.addEventListener("transitionend", removeTransition);
});

// Function to generate random note
function getRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

// Function to start new round
function startChallenge() {
    isStarted = true;
    // currentNote = getRandomNote();
    // document.getElementById('#').innerText = 'Press the correct key for the note: ' + currentNote;
    // currentRound++;

    startButton.classList.add('hide');
    quitButton.classList.remove('hide');

    // Initialise round and score to 0 at the start of quiz
    currentRound = 0;
    score = 0;
    setNextNote();
}

function setNextNote() {
    console.log('Setting next Note')
    console.log('Score: ' + score);
    resetState();
    currentNote = getRandomNote();
    showNote(currentNote);
    currentRound++;
    // console.log(`Round ${currentRound} of ${maxRounds}`);
    // challengeProgress.innerText = `Round ${currentRound} of ${maxRounds}`;
}

function showNote(question) {
    randomNoteElement.innerText = currentNote;
}

function resetState() {
    nextButton.classList.add('hide');
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
        console.log('correct');
        highlightKey(selectedKey, 'correct');
        score++;
        console.log('Score: ' + score)
    } else {
        console.log('incorrect')
        highlightKey(selectedKey, 'incorrect');
        highlightKey(correctKey, 'correct');
    }
    setNextNote();
    // document.getElementById('score').innerText = 'Score: ' + score + '/' + maxRounds;
    // startNewRound();

    nextButton.classList.remove('hide');
}

function handleNextButton() {
    // Increment round when next button is clicked
    currentRound++;
    if (currentRound < maxRoundsh) {
        // Continue if the current round just finished is not the last round
        setNextNote();
    } else {
        // Otherwise continue to results screen display and show score
        // quizScreen.classList.add('hide');
        resultsScreen.classList.remove('hide');
        showScore();
    }
}

function showScore() {
    totalScoreElement.innerHTML = `You scored ${score} out of ${maxRounds}!`
}

function restartChallenge() {
    resultsScreen.classList.add('hide');
    // Re-initialise round and score to 0 at the start of quiz
    currentRound = 0;
    score = 0;
    setNextNote();
}

function quitChallenge() {
    // confirm("Are you sure you want to quit?");
    // Redirect to another page
}
