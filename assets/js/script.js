// This file contains JavaScript code for interactivity on the portfolio.

// Function to handle tab switching
function switchTab(event) {
    const tabs = document.querySelectorAll('.tab-links');
    const contents = document.querySelectorAll('.tab-contents');

    // Remove active class from all tabs and hide all contents
    tabs.forEach(tab => {
        tab.classList.remove('active-link');
    });
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Add active class to the clicked tab and show the corresponding content
    event.target.classList.add('active-link');
    const index = Array.from(tabs).indexOf(event.target);
    contents[index].style.display = 'block';
}

// Add event listeners to tab links
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', switchTab);
});

// Initialize the first tab as active
document.querySelector('.tab-links').click();

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Last Updated footer
const footer = document.querySelector('footer p');
const currentDate = new Date();
footer.textContent = `Last Updated: ${currentDate.toDateString()}`;