const menuBtn = document.querySelector(".menu-icon");
const menuIcon = document.querySelector(".menu-icon > img");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    if (menuIcon.attributes.src.nodeValue === "./images/icon-menu.svg")
    {
        navMenu.classList.add("show")
        menuIcon.src = "./images/icon-menu-close.svg"
    }
    else
    {
        navMenu.classList.remove("show")
        menuIcon.src = "./images/icon-menu.svg"
    }
})
console.log(menuBtn);