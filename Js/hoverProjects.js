let prj1 = document.getElementById("prj1");
let prj2 = document.getElementById("prj2");
let prj3 = document.getElementById("prj3");

// Project 1

prj1.addEventListener("mouseover", () => {
    prj1.classList.add("activate");
});

prj1.addEventListener("mouseleave", () => {
    prj1.classList.remove("activate");
});

prj1.addEventListener("click", () => {
    window.open("https://www.youtube.com/", "_blank");
})

// Project 2

prj2.addEventListener("mouseover", () => {
    prj2.classList.add("activate");
});

prj2.addEventListener("mouseleave", () => {
    prj2.classList.remove("activate");
});

prj2.addEventListener("click", () => {
    window.open("https://www.youtube.com/", "_blank");
})

// Project 3

prj3.addEventListener("mouseover", () => {
    prj3.classList.add("activate");
});

prj3.addEventListener("mouseleave", () => {
    prj3.classList.remove("activate");
});

prj3.addEventListener("click", () => {
    window.open("https://www.youtube.com/", "_blank");
})