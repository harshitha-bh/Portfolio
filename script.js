document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });

    // Add hover effect for contact links in the footer
    const contactLinks = document.querySelectorAll('footer ul li a');

    contactLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});




