document.addEventListener('DOMContentLoaded', function() {
    // Get all the important elements from the DOM
    const mainNav = document.getElementById('main-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Toggle the mobile menu when the menu button is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the menu when a link is clicked (makes it better for mobile)
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Add a scroll effect to the navigation bar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });
});