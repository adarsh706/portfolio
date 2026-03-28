document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Loaded");

    // MOBILE MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // SMOOTH SCROLL
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // SCROLL ANIMATION
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

    // CARD CLICK
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            alert("Project details coming soon 🚀");
        });
    });

});