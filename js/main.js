
// Start Navbar

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".navbar ul");
let links = document.querySelectorAll(".navbar ul li");

// Open and close menu
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
});

// Active link
links.forEach(function (link) {
    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close menu after clicking
        menu.classList.remove("show");
    });
});

// end navbar

// start header
let moreBtn = document.querySelector(".btn-website");

moreBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let services = document.querySelector("#services");

    services.scrollIntoView({
        behavior: "smooth"
    });
});
// end header
