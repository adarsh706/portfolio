document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth Scroll
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const id = this.getAttribute("href");

            if (id.startsWith("#")) {
                e.preventDefault();
                document.querySelector(id).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Animation (Intersection Observer)
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

});
