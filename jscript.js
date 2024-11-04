const modal = document.getElementById("newsletterModal");
const subscribeBtn = document.getElementById("subscribeBtn");
const closeBtn = document.querySelector(".close");

const openModal = () => {
    modal.style.display = "block";
};

subscribeBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("load", () => {
    setTimeout(openModal, 5000);
});

const navLinks = document.querySelectorAll('.main-menu li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetID);
        const headerOffset = 60;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
