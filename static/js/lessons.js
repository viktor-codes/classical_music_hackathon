let btn = document.querySelector('#hamburger-menu');
let sidebar = document.querySelector('.sidebar');


btn.onclick = function() {
    console.log('active');
    sidebar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function() {
    const lessonTabs = document.querySelectorAll(".lesson-tab");
    const lessonContents = document.querySelectorAll(".lesson-content");


    // Function to show the selected lesson content
    function showLesson(lessonNumber) {
        lessonContents.forEach(content => {
            content.classList.add("d-none");
        });
        document.getElementById(`lesson-${lessonNumber}`).classList.remove("d-none");
    
    }

    // Add click event listeners to lesson tabs
    lessonTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const lessonNumber = this.getAttribute("data-lesson");

            lessonTabs.forEach(tab => tab.classList.remove("active"));
            this.classList.add("active");

            // Show the selected lesson content
            showLesson(lessonNumber);
        });
    });

    // Show the first lesson by default
    showLesson('1');
});