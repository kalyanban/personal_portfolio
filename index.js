const menuButton = document.getElementById("menuButton")
const mobileNavList = document.querySelector(".mobile-nav-tabs-container")

menuButton.addEventListener("click", () => {
    mobileNavList.classList.toggle("show")
})