const menuBtn = document.querySelector(".menu-icon");
const menuIcon = document.querySelector(".menu-icon > img");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    if (menuIcon.attributes.src.nodeValue === "./images/icon-menu.svg")
    {
        body.classList.add("show-nav")
        menuIcon.src = "./images/icon-menu-close.svg"
    }
    else
    {
        body.classList.remove("show-nav")
        menuIcon.src = "./images/icon-menu.svg"
    }
})
