const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY;

    let docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    let progress =
        (scrollTop / docHeight) * 100;

    document.getElementById("progress")
        .style.width = progress + "%";

});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});