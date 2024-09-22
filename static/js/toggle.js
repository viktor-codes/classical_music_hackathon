document.addEventListener("DOMContentLoaded", function () {
    // Offcanvas menu toggle
    const offcanvasToggler = document.querySelector('.navbar-toggler');
    const offcanvasMenu = document.querySelector('#offcanvasNavbar');
    const offcanvasCloseButton = document.querySelector('.btn-close');

    if (offcanvasToggler && offcanvasMenu) {
        offcanvasToggler.addEventListener('click', function () {
            offcanvasMenu.classList.toggle('show');
        });

        offcanvasCloseButton.addEventListener('click', function () {
            offcanvasMenu.classList.remove('show');
        });
    }

    // Dropdown toggle
    const profileDropdowns = document.querySelectorAll('.nav-item.dropdown .dropdown-toggle');
    profileDropdowns.forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault(); 
            const dropdownMenu = this.nextElementSibling;

            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            } else {
                document.querySelectorAll('.dropdown-menu.show').forEach(function (openMenu) {
                    openMenu.classList.remove('show');
                });
                dropdownMenu.classList.add('show');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(function (openMenu) {
                openMenu.classList.remove('show');
            });
        }
    });
});