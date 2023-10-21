// Menu links part
let togglerBtn=document.querySelector(".toggler"),
    theNavLinks=document.querySelector(".links");
togglerBtn.addEventListener("click", () => {
    theNavLinks.classList.toggle("openNavLinks");
});



// Scroll to top button
let scrollBtn=document.getElementById("scrollToTop");

window.onscroll=() => {
    if(scrollY>500) {
        scrollBtn.style.display="block";
    } else {
        scrollBtn.style.display="none";
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
