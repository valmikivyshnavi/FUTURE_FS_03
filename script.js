function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
});