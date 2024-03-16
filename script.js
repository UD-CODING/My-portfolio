document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("bx-menu-icon");
    const navbar = document.querySelector(".navbar");
    
    // Toggle navigation menu when menu icon is clicked
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: "smooth"
            });
        });
    });

    
    // Form Validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const message = document.querySelector("textarea[name='message']").value;
        
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
    
    function isValidEmail(email) {
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
