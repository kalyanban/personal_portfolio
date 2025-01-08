const menuButton = document.getElementById("menuButton")
const mobileNavList = document.querySelector(".mobile-nav-tabs-container")

const portfolioLinkButton = document.getElementById("portfolioLinkButton")

menuButton.addEventListener("click", () => {
    mobileNavList.classList.toggle("show")
})

portfolioLinkButton.addEventListener("click", () =>{
    const appUrl = "https://kalyanbandaru.netlify.app/"
    window.open(appUrl, "_blank")
})