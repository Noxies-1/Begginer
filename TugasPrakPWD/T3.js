const scrollBtn = document.getElementById("scrollToTopBtn");
        
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}