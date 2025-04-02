document.addEventListener("DOMContentLoaded", function () { // Smooth Scrolling document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener("click", function (e) { e.preventDefault(); document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); }); });

// Sticky Navbar Effect
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Scroll Animation Effect
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 1 });

document.querySelectorAll(".fade-in").forEach(element => {
    observer.observe(element);
});

// 3D Scroll Effect
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    document.querySelector(".hero-section").style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

});