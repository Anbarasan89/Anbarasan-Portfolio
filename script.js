const sections = document.querySelectorAll(".section");

const reveal = () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
            sec.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();

/* ✅ MOBILE NAV TOGGLE (FIX) */
function toggleMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}
