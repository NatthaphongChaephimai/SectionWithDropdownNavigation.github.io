// burger menu
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .x-icon");
let navLinks = document.querySelector(".nav-links");
let curtain = document.querySelector(".curtain");

menuOpenBtn.onclick = () => {
    navLinks.style.right= "0";
    curtain.style.display= "block";
};

closeOpenBtn.onclick = () => {
    navLinks.style.right= "-100%";
    curtain.style.display= "none";
};

// menu dropdown toggle
let features = document.querySelector("#features");
let company = document.querySelector("#company");

features.onclick = () => {
    features.classList.toggle('active');
};

company.onclick = () => {
    company.classList.toggle('active');
};