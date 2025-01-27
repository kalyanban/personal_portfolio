const menuButton = document.getElementById("menuButton")
const mobileNavList = document.querySelector(".mobile-nav-tabs-container")

const portfolioLinkButton = document.getElementById("portfolioLinkButton")
const nxtwatchLinkButton = document.getElementById("nxtwatchLinkButton")
const moviesAppLinkButton = document.getElementById("moviesAppLinkButton")

menuButton.addEventListener("click", () => {
    mobileNavList.classList.toggle("show")
})

portfolioLinkButton.addEventListener("click", () =>{
    const appUrl = "https://kalyanbandaru.netlify.app/"
    window.open(appUrl, "_blank")
})

nxtwatchLinkButton.addEventListener("click", () => {
    const appUrl = "https://nxtwatchkb.ccbp.tech/"
    window.open(appUrl, "_blank")
})

moviesAppLinkButton.addEventListener("click", () => {
    const appUrl = "https://moviesappkb.ccbp.tech"
    window.open(appUrl, "_blank")
})