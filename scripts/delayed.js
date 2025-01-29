// add more delayed functionality here

// Select the navbar
const navbar = document.querySelector('.nav-wrapper');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
