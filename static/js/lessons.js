let btn = document.querySelector('#hamburger-menu');
let sidebar = document.querySelector('.sidebar');


btn.onclick = function() {
    console.log('active');
    sidebar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function() {
    const lessonTabs = document.querySelectorAll(".lesson-tab");
    const lessonContents = document.querySelectorAll(".lesson-content");
    const pianoKeys = document.querySelectorAll(".keys .key");
    const keyImage = document.getElementById('key-image'); // Get the image element

    // Function to enable or disable specific keys based on the lesson
    function updatePlayableKeys(lessonNumber) {
        // Clear all playable classes and event listeners from all keys
        pianoKeys.forEach(key => {
            key.classList.remove("playable"); // Remove 'playable' class
            key.removeEventListener("click", playNote); // Remove click event listener
        });

        // Enable specific keys based on the selected lesson
        switch (lessonNumber) {
            case '1':
                enableKeys(['c4', 'D', 'E']); // Example notes for Lesson 1
                break;
            case '2':
                enableKeys(['F', 'G', 'A']); // Example notes for Lesson 2
                break;
            case '3':
                enableKeys(['B', 'c5', 'd5']); // Example notes for Lesson 3
                break;
            // Add more cases for additional lessons as needed
        }
    }

    // Function to enable specific keys and add event listeners
    function enableKeys(notesArray) {
        notesArray.forEach(note => {
            // Select the key element with the corresponding data-note attribute
            const key = document.querySelector(`.key[data-note="${note}"]`);
            if (key) {
                key.classList.add("playable"); // Add 'playable' class
                key.addEventListener("click", playNote); // Add click event listener
            }
        });
    }

    // Function to play a note when a key is clicked
    function playNote() {
        if (!this.classList.contains('playable')) {
            // Prevent playing sound if the key is not playable
            return;
        }
        const note = this.getAttribute('data-note');
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
        if (audio) {
            audio.currentTime = 0; // Rewind to start of the audio
            audio.play(); // Play the audio
        }
    }


    // Function to show the selected lesson content and update playable keys
    function showLesson(lessonNumber) {
        // Hide all lesson contents
        lessonContents.forEach(content => {
            content.classList.add("d-none"); // Add 'd-none' class to hide
        });
        // Show the selected lesson content
        document.getElementById(`lesson-${lessonNumber}`).classList.remove("d-none");

        // Update playable keys for the selected lesson
        updatePlayableKeys(lessonNumber);
    }

    // Add click event listeners to lesson tabs
    lessonTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const lessonNumber = this.getAttribute("data-lesson");

            // Remove 'active' class from all tabs and add to the clicked one
            lessonTabs.forEach(tab => tab.classList.remove("active"));
            this.classList.add("active");

            // Show the selected lesson content and update playable keys
            showLesson(lessonNumber);
        });
    });

    // Show the first lesson by default and set up playable keys
    showLesson('1'); // Default lesson
});

document.addEventListener("keydown", function(event) {
    const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (keyElement && !keyElement.classList.contains('playable')) {
        event.preventDefault(); // Prevent default action for non-playable keys
    }
});