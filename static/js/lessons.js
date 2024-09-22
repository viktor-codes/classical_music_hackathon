let btn = document.querySelector('#hamburger-menu');
let sidebar = document.querySelector('.sidebar');


btn.onclick = function() {
    console.log('active');
    sidebar.classList.toggle('active');
};
