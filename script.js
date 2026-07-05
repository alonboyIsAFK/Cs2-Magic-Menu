document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Sticky Navbar Transparency & Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "12px 0";
            navbar.style.background = "rgba(6, 2, 15, 0.92)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(6, 2, 15, 0.75)";
            navbar.style.boxShadow = "none";
        }
    });

    // 2. Modern Accordion Functionality for FAQs
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");
        
        questionButton.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Close all active items first for a clean behavior
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Toggle clicked item
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // 3. Simple Mobile Navigation Menu Toggle Action
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        // Toggle mobile styling representation layout if desired
        alert("Navigation structure configured. Ready for implementation of full mobile sidebar expansion.");
    });
});
