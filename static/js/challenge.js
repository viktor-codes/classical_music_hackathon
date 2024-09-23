document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll(".key");
    const notes = Array.from(keys).map(key => key.getAttribute('data-note'));
    const startButton = document.getElementById('start-btn');
    const resetButton = document.getElementById('reset-btn');
    const randomNoteElement = document.getElementById('random-note');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');

    let score = 0;
    let currentNote = '';
    let isStarted = false;
    let isGamePaused = true;
    let countdownTimer;

    loadScores();

    // Random facts about classical music
    const randomFacts = [
        "Ludwig van Beethoven composed most of his music while being completely deaf.",
        "Wolfgang Amadeus Mozart wrote his first symphony when he was just 8 years old.",
        "Johann Sebastian Bach was known for his improvisational skills at the organ.",
        "Antonio Vivaldi composed over 500 concertos, many of which were for the violin.",
        "Franz Schubert was one of the first composers to write Lieder, or German art songs."
    ];

    // Event listeners
    startButton.addEventListener('click', startChallenge);
    resetButton.addEventListener('click', restartChallenge);
    window.addEventListener('keydown', selectAnswer);
    keys.forEach(key => {
        key.addEventListener("click", selectAnswer);
        key.addEventListener("transitionend", removeTransition);
    });

    function startChallenge() {
        if (isStarted) return;

        score = 0;
        isStarted = true;
        isGamePaused = false;
        updateScore();
        setNextNote();
        startCountdown(3 * 60);
    }

    function startCountdown(seconds) {
        let timeLeft = seconds;
        timerElement.innerText = `Time Left: 03:00`;
        countdownTimer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdownTimer);
                endGame();
            } else {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerElement.innerText = `Time Left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    function endGame() {
        isGamePaused = true;
        isStarted = false;
        clearInterval(countdownTimer);
        saveScore();
        showGameOverModal();
    }

    function setNextNote() {
        isGamePaused = false;
        resetState();
        currentNote = getRandomNote();
        showNote();
    }

    function resetState() {
        randomNoteElement.innerText = '';
        clearKeyboard();
    }

    function showNote() {
        randomNoteElement.innerText = currentNote;
    }

    function selectAnswer(e) {
        if (isGamePaused) return;

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
            highlightKey(correctKey, 'correct-blue');
            score--;
            updateScore();

            isGamePaused = true;
            setTimeout(() => {
                handleNextButton();
            }, 3000);
            return;
        }

        isGamePaused = true;
        setTimeout(handleNextButton, 1000);
    }

    function handleNextButton() {
        if (!isGamePaused) return;
        clearKeyboard();
        setNextNote();
    }

    function clearKeyboard() {
        document.querySelectorAll(".correct").forEach(key => key.classList.remove('correct'));
        document.querySelectorAll(".incorrect").forEach(key => key.classList.remove('incorrect'));
        document.querySelectorAll(".correct-blue").forEach(key => key.classList.remove('correct-blue'));
    }

    function restartChallenge() {
        clearKeyboard();
        score = 0;
        updateScore();
        setNextNote();
        startCountdown(3 * 60);
    }

    function updateScore() {
        scoreElement.innerHTML = `SCORE: ${score}`;
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('correct', 'incorrect', 'correct-blue');
    }

    function getRandomNote() {
        return notes[Math.floor(Math.random() * notes.length)];
    }

    function highlightKey(keyElement, status) {
        keyElement.classList.add(status);
    }

    function saveScore() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push(score);
        highScores.sort((a, b) => b - a);
        if (highScores.length > 10) {
            highScores.pop();
        }
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }

    function loadScores() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        console.log("Top 10 High Scores: ", highScores);
    }

    function showGameOverModal() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const highScore = highScores.length > 0 ? highScores[0] : score;
        const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

        // Update modal content
        document.getElementById('final-score').innerText = score;
        document.getElementById('high-score').innerText = highScore;
        document.getElementById('random-fact').innerText = randomFact;

        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
        myModal.show();
    }
});